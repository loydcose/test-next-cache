import Link from "next/link"
import { getCachedTime, revalidateCachedTime } from "../actions"

export default async function page() {
  const time = await getCachedTime()

  return (
    <div>
      <b>CACHE 2</b>
      <h1>{time}</h1>
      <form action={revalidateCachedTime}>
        <button className="bg-black text-white">Revalidate time</button>
      </form>
      <Link href="/unstable-cache">Go to CACHE 1</Link>
    </div>
  )
}
