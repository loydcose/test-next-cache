import { getTime } from "../actions"

export const revalidate = 5

export default async function Revalidate() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila", { next: { revalidate: 5 } })
  const time = await res.json()
  const {datetime} = time

  return <div>Revalidated: {new Date(datetime).toLocaleTimeString()}</div>
}