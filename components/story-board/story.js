
const Story = ({ username, image }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-2 cursor-pointer">
      <div className="rounded-full overflow-hidden w-16 h-16 bg-gradient-to-r from-yellow-500 to-pink-500 p-1">
        <div className="rounded-full overflow-hidden h-14 ring-[1.8px] ring-white">
          <img className="w-full" src={image} alt={image} />
        </div>
      </div>
      <span className="text-xs">{username}</span>
    </div>
  )
}

export default Story
