// DONE REVIEWING: GITHUB COMMIT 2️⃣
import {Poppins} from "next/font/google"
import {PropsWithChildren} from "react"
import {Toaster} from "../components/ui"
import "../styles/global.css"
import Providers from "./providers"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en" className="h-full bg-background">
      <head />
      <body className={`${poppins.className} h-full`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}

export default Layout
