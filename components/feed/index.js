import axios from "axios"
import { useEffect, useState } from 'react'
import Post from './post'

const Feed = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((result) => {
      setUser(result?.data?.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <section className='space-y-3'>
      {user.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </section>
  )
}

export default Feed
