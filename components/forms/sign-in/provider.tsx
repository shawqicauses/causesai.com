"use client"

// DONE REVIEWING: GITHUB COMMIT

import {AuthenticationContextProvider} from "../../../contexts/authentication"
import useSignInForm from "../../../hooks/sign-in/use-sign-in.hook"
import {Form} from "../../ui"

const SignInFormProvider = function SignInFormProvider({children}: {children: React.ReactNode}) {
  const {methods, onHandleSubmit} = useSignInForm()
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

export default SignInFormProvider
