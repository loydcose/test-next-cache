"use server"


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