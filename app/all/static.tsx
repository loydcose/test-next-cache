import { getTime } from "../actions"

export default async function Static() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila", { cache: "force-cache" })
  const time = await res.json()
  const {datetime} = time

  return <div>Static: {new Date(datetime).toLocaleTimeString()}</div>
}