import ProfileCard from "@/components/profile-card"
import { Suspense } from "react"

// export const fetchCache = 'force-cache'
export const revalidate = 5

export default async function Home() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")

  // const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila", {
  //   cache: "no-store",
  // })
  const time = await res.json()
  // console.log({res, time})

  const {datetime} = time


  return (
    <main>
      <nav className="flex items-center gap-2 justify-between p-4 rounded-lg bg-zinc-50 shadow-lg">
        <h1>This is a static nav</h1>
        <p>{new Date(datetime).toLocaleTimeString()}</p>
        <p>{datetime}</p>
        <ul className="flex items-center gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Sign in</li>
        </ul>
      </nav>

      {/*  or pwede karing mag loading.tsx para sa whole page, but since per component ang lalagayan ng loading, need ng suspense */}
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <ProfileCard />
      {/* </Suspense> */}
    </main>
  )
}
