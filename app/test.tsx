
export const revalidate = 10
export const dynamic = 'force-dynamic'

export async function getData() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
  const time = await res.json()

  // or with route handlers
  // const res = await fetch("/api/get-time", { cache: "force-cache" })
  // const time = await res.json()

  return time
}

export default async function Home() {
  const { datetime } = await getData()

  return datetime
}
