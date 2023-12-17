import React from "react"
import Image from "next/image"
import Link from "next/link"
// import { getProfile, getTime } from "@/app/actions"
// todo this is the time dude
export default async function ProfileCard() {
  // const profile = await getProfile()
  // const { datetime } = await getTime()
  // console.log(profile)
  // const { name, followers, following, url, avatar_url, bio } = profile

  return (
    <section className="p-8 bg-zinc-50 shadow-md rounded-2xl mt-8 w-[600px]">
      {/* <p className="text-center">{datetime}</p> */}
      <p className="text-center">Trashhh</p>
      {/* <Image
        src={avatar_url}
        alt={name}
        width={200}
        height={200}
        className="w-[200px] h-[200px] rounded-full mx-auto block"
      />
      <p className="text-center">{datetime}</p>
      <p className="text-center">{bio}</p>
      <p className="text-center text-lg font-bold">{name}</p>
      <div className="flex items-center gap-3 w-fit mx-auto">
        <p>{followers} follower/s</p>
        <p>{following} following</p>
      </div>
      <Link
        href={url}
        className="bg-blue-600 rounded-lg px-3 py-2 text-sm block text-white w-fit mx-auto"
      >
        Github profile
      </Link> */}
    </section>
  )
}
