"use client"

// DONE REVIEWING: GITHUB COMMIT 6️⃣

import Link from "next/link"
import {useFormContext} from "react-hook-form"
import {useAuthentication} from "../../../contexts/authentication"
import useSignUpForm from "../../../hooks/sign-up/use-sign-up.hook"
import {Button} from "../../ui"

const SignUpFormButtons = function SignUpFormButtons() {
  const {formState, getFieldState, getValues} = useFormContext()
  const {stepCurrent, setStepCurrent} = useAuthentication()
  const {onGenerateOTP} = useSignUpForm()

  const isType = getFieldState("type", formState)
  const isName = getFieldState("name", formState)
  const isUsername = getFieldState("username", formState)
  const isEmail = getFieldState("email", formState)
  const isEmailConfirmation = getFieldState("emailConfirmation", formState)
  const isPassword = getFieldState("password", formState)
  const isPasswordConfirmation = getFieldState("passwordConfirmation", formState)

  const isDisabled =
    isName.invalid ||
    isUsername.invalid ||
    isEmail.invalid ||
    isEmailConfirmation.invalid ||
    isPassword.invalid ||
    isPasswordConfirmation.invalid ||
    !Boolean(getValues("name")) ||
    !Boolean(getValues("username")) ||
    !Boolean(getValues("email")) ||
    !Boolean(getValues("emailConfirmation")) ||
    !Boolean(getValues("password")) ||
    !Boolean(getValues("passwordConfirmation"))

  if (stepCurrent === 3)
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <Button variant="accent" type="submit" className="w-full">
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
          variant="accent"
          type="button"
          disabled={isDisabled}
          className="w-full"
          {...(!isDisabled && {
            onClick: () =>
              onGenerateOTP(
                getValues("username"),
                getValues("email"),
                getValues("password"),
                setStepCurrent
              )
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
        variant="accent"
        type="button"
        disabled={isType.invalid || !Boolean(getValues("type"))}
        className="w-full"
        onClick={() =>
          !(isType.invalid || !Boolean(getValues("type"))) &&
          setStepCurrent((previous) => previous + 1)
        }>
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
