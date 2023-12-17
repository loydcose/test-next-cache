import NoStore from "./no-store"
import Revalidate from "./revalidate"
import Static from "./static"

export default async function page() {
  return (
    <div>
      <Static />
      <Revalidate />
      <NoStore />
    </div>
  )
}
