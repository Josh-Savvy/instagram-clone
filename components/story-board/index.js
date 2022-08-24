import { useEffect } from 'react'
import { useState } from 'react'
import storiesData from '../../data/stories'
import Story from './story'

const StoryBoard = () => {
  const [stories, setStories] = useState([])
  const [leftArrow, setLeftArrow] = useState(false)
  useEffect(() => {
    setStories(storiesData)
  }, []);

  const scrollStories = () => {
    setLeftArrow(true)
  }

  return (
    <section className="relative card flex gap-4 overflow-x-scroll scrollbar-none rounded" id='storiesSection'>
      <div className=''>
        <div className='absolute cursor-pointer top-12 right-4 rounded-full bg-white shadow p-1' onClick={scrollStories}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className={leftArrow ? "absolute cursor-pointer top-12 left-4 rounded-full bg-white shadow p-1" : "hidden"} onClick={() => {
          document.getElementById("storiesSection").scrollWidth === 1000 && setLeftArrow(false)
        }} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
      </div>
      {stories.length > 0 ? stories.map((story) => {
        let username = story.username.split(' ').join('').toLowerCase()
        username = username.length <= 10 ? username : `${username.slice(0, 8)}...`
        return <Story key={story.id} username={username} image={story.image} />
      }) : <div className='text-sm'>Loading stories...</div>}
    </section>
  )
}

export default StoryBoard
