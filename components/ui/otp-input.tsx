"use client"

// DONE REVIEWING: GITHUB COMMIT

import {OTPInput} from "input-otp"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../lib/utils"

const InputOTP = forwardRef<ElementRef<typeof OTPInput>, ComponentPropsWithoutRef<typeof OTPInput>>(
  ({containerClassName, className, ...props}, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
)

InputOTP.displayName = "InputOTP"

export default InputOTP
