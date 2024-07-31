// DONE REVIEWING: GITHUB COMMIT

import {authMiddleware} from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: ["/", "/auth(.*)", "/portal(.*)"],
  ignoredRoutes: ["/chatbot"]
})

export const config = {
  matcher: [
    // Skip Next.JS internals and all static files, un-less found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)"
  ]
}
