"use server"

import { revalidateTag, unstable_cache } from "next/cache"
import { cache } from "react"


export async function getProfile() {
  // const profileRes = await fetch("https://api.github.com/users/loydcose", {cache: "no-store"})
  const profileRes = await fetch("https://api.github.com/users/loydcose")
  const profile = await profileRes.json()

  // await new Promise(resolve => setTimeout(resolve, 3000))

  return profile
}

export async function getTime() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
  const time = await res.json()

  return time
}

export const getRandomNumber = cache(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Math.random()
})

export const getRandomNumber3 = cache(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Math.random()
})



export const getCachedTime = unstable_cache(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return new Date().toLocaleTimeString()
}, ["time"], {tags: ["time"]})


export const revalidateCachedTime = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  revalidateTag("time")
}


export const getTimeOnLayoutCache = cache(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return new Date().toLocaleTimeString()
})
