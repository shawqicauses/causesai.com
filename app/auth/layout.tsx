// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {currentUser} from "@clerk/nextjs"
import {BarChart2Icon} from "lucide-react"
import {redirect} from "next/navigation"
import {PropsWithChildren} from "react"

const AuthenticationLayout = async function AuthenticationLayout({children}: PropsWithChildren) {
  const userAuthenticated = await currentUser()
  if (userAuthenticated) redirect("/")
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="shc-flex-center mb-5 h-8 w-8 rounded-lg bg-primary text-white">
            <BarChart2Icon aria-hidden="true" className="h-5 w-5" />
          </div>
          {children}
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 bg-muted px-20 py-10 lg:block">
        <h2 className="text-xl-4 font-bold leading-tight tracking-tight text-foreground">
          Hi 👋🏻 I am your AI assistant, <span className="text-primary">Causes</span>!
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Causes is capable of capturing lead information from your website users and converting
          them into customers without a form. An AI assistant never done before.
        </p>
        {/* Screen-shot Here */}
      </div>
    </div>
  )
}

export default AuthenticationLayout
