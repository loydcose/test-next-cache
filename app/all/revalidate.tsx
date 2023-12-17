import { getTime } from "../actions"

export const revalidate = 5

export default async function Revalidate() {
  const { datetime } = await getTime()

  return <div>Revalidated: {new Date(datetime).toLocaleTimeString()}</div>
}