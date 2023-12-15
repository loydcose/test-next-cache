import Image from "next/image"
import Link from "next/link"
import { getProfile } from "./actions"

export default async function Home() {
  const profile = await getProfile()
  const { name, followers, following, url, avatar_url } = profile
  console.log(profile)

  return (
    <main>
      <nav className="flex items-center gap-2 justify-between p-4 rounded-lg bg-zinc-50 shadow-lg">
        <h1>This is a static nav</h1>
        <ul className="flex items-center gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Sign in</li>
        </ul>
      </nav>

      <section className="p-8 bg-zinc-50 shadow-md rounded-2xl mt-8 w-[600px]">
        <Image
          src={avatar_url}
          alt={name}
          width={200}
          height={200}
          className="w-[200px] h-[200px] rounded-full mx-auto block"
        />
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
        </Link>
      </section>
    </main>
  )
}
