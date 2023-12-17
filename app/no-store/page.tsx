import { getTime } from "../actions"

export const dynamic = "force-dynamic"

export default async function page() {
  const { datetime } = await getTime()

  return <div>{new Date(datetime).toLocaleTimeString()}</div>
}
