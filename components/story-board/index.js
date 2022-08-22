import stories from '../../data/stories'
import Story from './story'

const StoryBoard = () => {
  return (
    <section className="card flex gap-4 overflow-x-scroll md:scrollbar-thin md:scrollbar-thumb-gray-700 md:scrollbar-track-gray-100">
      {stories.map((story) => {
        let username = story.username.split(' ').join('').toLowerCase()
        username = username.length <= 10 ? username : `${username.slice(0, 8)}...`
        return <Story key={story.id} username={username} image={story.image} />
      })}
    </section>
  )
}

export default StoryBoard
