"use server"


export async function getProfile() {
  const profileRes = await fetch("https://api.github.com/users/loydcose", {cache: "no-cache"})
  const profile = await profileRes.json()

  await new Promise(resolve => setTimeout(resolve, 3000))

  return profile
}