import { useEffect, useState } from 'react';
import Button from './button.js'
import Person from './person'
import axios from "axios"

const Panel = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((result) => {
      setPeople(result?.data?.results)
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <section className="w-[22rem] hidden lg:block lg:fixed ml-[31.5rem] space-y-4 pt-4 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden w-16 h-16 cursor-pointer">
            <img
              className="w-full"
              src="/assets/images/me2.png"
              alt="Joshua Joseph"
            />
          </div>
          <div>
            <h2 className="font-semibold text-md">JoshDev</h2>
            <h3 className="opacity-50">Joshua Joseph</h3>
          </div>
        </div>
        <Button>Switch</Button>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="font-bold opacity-50">Suggestions For You</h1>
        <Button blacked>See All</Button>
      </div>

      <div className='space-y-4'>
        {people.length < 1 ? <div className='p-12'><div className="loadingio-spinner-spinner-qywyypxhuub"><div className="ldio-v476ketcch">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div></div> : people.map((person, id) => (
          <Person key={id} person={person} />
        ))}
      </div>
      <div className='mt-5 text-zinc-500'>
        <div className='flex gap-x-1 text-xs opacity-50'>
          <p className='flex gap-x-1'>About <span className=' text-xs'> ▪</span></p>
          <p className='flex gap-x-1'>Help <span className='text-xs'> ▪</span></p>
          <p className='flex gap-x-1'>Press <span className='text-xs'> ▪</span></p>
          <p className='flex gap-x-1'>API <span className='text-xs'> ▪</span></p>
          <p className='flex gap-x-1'>Jobs <span className='text-xs'> ▪</span></p>
          <p className='flex gap-x-1'>Privacy <span className='text-xs'> ▪</span></p>
          <p className='flex gap-x-1'>Terms <span className='text-xs'> ▪</span></p>
          <p className='flex gap-x-1'>Locations <span className='text-xs'> ▪</span></p>
          <p className='flex gap-x-1'>Language</p>
        </div>
      </div>
    </section>
  )
}

export default Panel
