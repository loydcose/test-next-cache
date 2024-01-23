import Link from "next/link"
import { getRandomNumber, getRandomNumber3 } from "../actions"

export const revalidate = 5

export default async function page() {
  const [number1, number2, number3] = await Promise.all([
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber3()
  ]);

  return (
    <>
      <h1>Page</h1>
      <Link href="/cache/other">Go to page 2</Link>
      <p>Random number with cache: {number1}</p>
      <p>Random number with cache: {number2}</p>
      <br/>
      <p>Random number without cache: {number3}</p>
    </>
  )
}
