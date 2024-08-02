// DONE REVIEWING: GITHUB COMMIT

import {currentUser} from "@clerk/nextjs"
import {redirect} from "next/navigation"
import {PropsWithChildren} from "react"

const AuthenticationLayout = async function AuthenticationLayout({children}: PropsWithChildren) {
  const userAuthenticated = await currentUser()
  if (userAuthenticated) redirect("/")
  return children
}

export default AuthenticationLayout
