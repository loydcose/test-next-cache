import { getRandomNumber } from "@/app/actions"
import Link from "next/link"

export default async function page() {
  const number1 = await getRandomNumber()

  return (
    <>
      <h1>Page 2</h1>
      <Link href="/cache">Go to page 1</Link>
      <p>Random number: {number1}</p>
    </>
  )
}
