"use client"

// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {PropsWithChildren} from "react"
import {AuthenticationContextProvider} from "../../../contexts/authentication"
import useSignUpForm from "../../../hooks/sign-up/use-sign-up.hook"
import {Form} from "../../ui"

const SignUpFormProvider = function SignUpFormProvider({children}: PropsWithChildren) {
  const {methods, onHandleSubmit} = useSignUpForm()
  return (
    <AuthenticationContextProvider>
      <Form {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex h-full flex-col justify-between gap-3">{children}</div>
        </form>
      </Form>
    </AuthenticationContextProvider>
  )
}

export default SignUpFormProvider
