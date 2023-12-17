import { getTime } from "../actions"

export default async function page() {
  const { datetime } = await getTime()

  return <div>{new Date(datetime).toLocaleTimeString()}</div>
}
