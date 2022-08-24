import Layout from "../../../components/layout"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useRouter } from "next/router"


const UserProfile = () => {
    const router = useRouter()
    const [user, setUser] = useState([])

    useEffect(() => {
        const { id } = router.query
        axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
            setUser(res?.data?.data)
            console.log(res);
        }).catch((err) => console.log(err))

    }, [])
    return (
        <Layout className="md:block hidden">
            <div className="">
                {user.length > 0 ?
                    <>
                        {user.map((u, i) => (
                            <div key={i}>
                                <div className="md:hidden bg-white w-screen shadow h-12 top-0 fixed flex py-3 gap-20">
                                    <Link href="/">
                                        <span className="ml-5 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                            </svg>
                                        </span>
                                    </Link>
                                    <span className="font-semibold">{`${user.first_name}${Math.floor(Math.random() * user.last_name.length)}`}</span>
                                </div>
                                <div className="md:mt-12 md:mt-0">
                                    <div className="md:flex gap-5">
                                        <div className="md:flex justify-center md:m-16 mt-24">
                                            <img src={u.avatar} className="rounded-full md:h-40 md:w-40" alt="" />
                                        </div>
                                        <div className="mt-5">
                                            <div className="flex gap-5">
                                                <h2 className="text-2xl font-light">{`${u.first_name} ${u.last_name}`}</h2>
                                                <button className="px-2 border-zinc-300 text-sm border rounded font-bold hover:bg-zinc-100">Message</button>
                                                <button className="text-center px-6 border-zinc-300 text-sm border rounded font-bold hover:bg-zinc-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                                    </svg>
                                                </button>
                                                <button className="px-1 border-zinc-300 text-sm border rounded hover:bg-zinc-100 text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </button>
                                                <button className="text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex gap-5 mt-8">
                                                <p><span className="font-semibold">{Math.floor(Math.random() * 440 * Math.random())}</span> posts</p>
                                                <p><span className="font-semibold">{Math.floor(Math.random() * 440)}</span> followers</p>
                                                <p><span className="font-semibold">{Math.floor(Math.random() * 440 * Math.random())}</span> following</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                    : <div className="">Loading...</div>}
            </div>
        </Layout>
    )
}
export default UserProfile
