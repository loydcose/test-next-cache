import { getTime } from "../actions"

export const dynamic = "force-dynamic"

export default async function NoStore() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila", { cache: "no-store" })
  const time = await res.json()
  const {datetime} = time

  return <div>No store: {new Date(datetime).toLocaleTimeString()}</div>
}