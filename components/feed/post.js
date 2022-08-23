import Link from "next/link"
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import {
  BookmarkIcon,
  EmojiCollection,
  HeartIcon,
  MessageIcon,
  ShareIcon,
} from './icons'
import { useState } from "react"
import { useMemo } from "react"

const Post = ({ post, user }) => {
  const [state, setState] = useState({
    likeBg: "",
    liked: false
  })
  const { likeBg, liked } = state
  const postLikes = useMemo(() => Math.floor(Math.random() * 200), [])
  const postCreatedOn = useMemo(() => Intl.DateTimeFormat('sv-SE').format(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 1000))), [])
  return (
    <div className="relative card space-y-4 select-none">
      {/* Heading */}
      <div className="flex justify-between items-center">
        <Link href={`/user/profile/${post.id}`}>
          <div className="flex gap-3 items-center -m-2">
            <div className="w-8 h-8 overflow-hidden rounded-full cursor-pointer">
              <img className="w-full" src={post.avatar} alt={post.avatar} />
            </div>
            <h2 className=" font-semibold cursor-pointer">{`${post.first_name} ${post.last_name}`}</h2>
          </div>
        </Link>
        <DotsHorizontalIcon className="w-5 h-5 cursor-pointer" />
      </div>
      {/* Posted Image */}
      <div className="relative -mx-5 aspect-square overflow-hidden">
        <img className="w-screen" src={`https://random.imagecdn.app/1080/11${Math.floor(
          Math.random() * 100
        )}`} alt={post.first_name} />
      </div>
      {/* Actions */}
      <div className="space-y-2">
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-4">
            <HeartIcon onclick={() => { liked === false ? setState({ ...state, liked: true, likeBg: "red" }) : setState({ ...state, liked: false, likeBg: "" }) }} likeBg={likeBg} />
            <MessageIcon />
            <ShareIcon />
          </div>
          <BookmarkIcon />
        </div>
        <span className=" font-semibold">{`${liked ? postLikes++ : postLikes -= 1} likes`}</span>
        <p>
          <span className="font-semibold">{`${post.first_name} ${post.last_name}`} </span>
          {post.description}
        </p>
        <h3 className="text-xs text-gray-500">{postCreatedOn}</h3>
      </div>

      <div className="h-[1px] relative left-0 right-0 bg-gray-200 -mx-5"></div>

      <div className="flex gap-4">
        <EmojiCollection />
        <input
          className="focus:outline-none w-full"
          type="text"
          placeholder="Add a comment"
        />
        <button className="text-blue-500">Post</button>
      </div>
    </div>
  )
}

export default Post
