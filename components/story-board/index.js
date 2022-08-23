import { useState } from 'react'
import storiesData from '../../data/stories'
import Story from './story'

const StoryBoard = () => {
  const [stories, setStories] = useState([])
  setTimeout(() => {
    setStories(storiesData)
  }, 2000);
  return (
    <section className="card flex gap-4 overflow-x-scroll scrollbar-none rounded">
      {stories.length > 0 ? stories.map((story) => {
        let username = story.username.split(' ').join('').toLowerCase()
        username = username.length <= 10 ? username : `${username.slice(0, 8)}...`
        return <Story key={story.id} username={username} image={story.image} />
      }) : <div className='text-sm'>Loading stories...</div>}
    </section>
  )
}

export default StoryBoard
