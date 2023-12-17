import { getTime } from "../actions"

export const dynamic = "force-dynamic"

export default async function NoStore() {
  const { datetime } = await getTime()

  return <div>No store: {new Date(datetime).toLocaleTimeString()}</div>
}