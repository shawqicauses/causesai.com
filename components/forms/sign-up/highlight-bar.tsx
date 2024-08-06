"use client"

// DONE REVIEWING: GITHUB COMMIT

import {useAuthentication} from "../../../contexts/authentication"
import {cn} from "../../../lib/utils"

const SignUpFormHighlightBar = function SignUpFormHighlightBar() {
  const {stepCurrent} = useAuthentication()
  return (
    <div className="grid grid-cols-3 gap-3">
      <div
        className={cn("col-span-1 h-2 rounded-full", stepCurrent === 1 ? "bg-primary" : "bg-muted")}
      />
      <div
        className={cn("col-span-1 h-2 rounded-full", stepCurrent === 2 ? "bg-primary" : "bg-muted")}
      />
      <div
        className={cn("col-span-1 h-2 rounded-full", stepCurrent === 3 ? "bg-primary" : "bg-muted")}
      />
    </div>
  )
}

export default SignUpFormHighlightBar
