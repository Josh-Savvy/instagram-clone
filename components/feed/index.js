import axios from "axios"
import { useEffect, useState } from 'react'
import Post from './post'

const Feed = () => {
  const [user, setUser] = useState([])

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((result) => {
      const shuffled = shuffle(result?.data?.data)
      setUser(shuffled)
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
