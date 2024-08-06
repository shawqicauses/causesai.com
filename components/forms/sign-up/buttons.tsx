"use client"

// DONE REVIEWING: GITHUB COMMIT 3️⃣

import Link from "next/link"
import {useFormContext} from "react-hook-form"
import {useAuthentication} from "../../../contexts/authentication"
import useSignUpForm from "../../../hooks/sign-up/use-sign-up.hook"
import {Button} from "../../ui"

const SignUpFormButtons = function SignUpFormButtons() {
  const {formState, getFieldState, getValues} = useFormContext()
  const {stepCurrent, setStepCurrent} = useAuthentication()
  const {onGenerateOTP} = useSignUpForm()

  const {isDirty: isName} = getFieldState("name", formState)
  const {isDirty: isEmail} = getFieldState("email", formState)
  const {isDirty: isPassword} = getFieldState("password", formState)

  if (stepCurrent === 3)
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <Button type="submit" className="w-full">
          Create an account
        </Button>
        <p className="text-sm text-muted-foreground">
          Do you have an account?{" "}
          <Button variant="link" className="text-foreground !shadow-none" asChild>
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
        </p>
      </div>
    )

  if (stepCurrent === 2)
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <Button
          type="button"
          disabled={!isName || !isEmail || !isPassword}
          className="w-full"
          {...(isName &&
            isEmail &&
            isPassword && {
              onClick: () =>
                onGenerateOTP(getValues("email"), getValues("password"), setStepCurrent)
            })}>
          Continue
        </Button>
        <p className="text-sm text-muted-foreground">
          Do you have an account?{" "}
          <Button variant="link" className="text-foreground !shadow-none" asChild>
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
        </p>
      </div>
    )

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <Button
        type="button"
        className="w-full"
        onClick={() => setStepCurrent((previous) => previous + 1)}>
        Continue
      </Button>
      <p className="text-sm text-muted-foreground">
        Do you have an account?{" "}
        <Button variant="link" className="text-foreground !shadow-none" asChild>
          <Link href="/auth/sign-in">Sign In</Link>
        </Button>
      </p>
    </div>
  )
}

export default SignUpFormButtons
