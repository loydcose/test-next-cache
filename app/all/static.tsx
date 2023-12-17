import { getTime } from "../actions"

export default async function Static() {
  const { datetime } = await getTime()

  return <div>Static: {new Date(datetime).toLocaleTimeString()}</div>
}