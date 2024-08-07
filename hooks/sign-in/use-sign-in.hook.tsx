"use client"

// DONE REVIEWING: GITHUB COMMIT

import {useSignIn} from "@clerk/nextjs"
import {zodResolver} from "@hookform/resolvers/zod"
import {useRouter} from "next/navigation"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {toast} from "sonner"
import {SignInSchema, SignInSchemaParams} from "../../schemas/auth.schema"

const useSignInForm = function useSignInForm() {
  const router = useRouter()
  const {signIn, isLoaded, setActive} = useSignIn()
  const methods = useForm<SignInSchemaParams>({
    resolver: zodResolver(SignInSchema),
    mode: "onChange"
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onHandleSubmit = methods.handleSubmit(async (data: SignInSchemaParams) => {
    if (!isLoaded) return

    try {
      setIsLoading(true)
      const authenticated = await signIn.create({
        identifier: data.email,
        password: data.password
      })

      if (authenticated.status === "complete") {
        await setActive({session: authenticated.createdSessionId})
        toast("Success", {description: "Welcome back!"})
        router.push("/dashboard")
      }
    } catch (error: any) {
      if (error.errors[0].code === "form_password_incorrect")
        toast("Error", {
          description: "In-correct email/password. Please try again."
        })

      toast("Error", {
        description:
          error.errors[0].longMessage || "An error occurred while signing in. Please try again."
      })
    } finally {
      setIsLoading(false)
    }
  })

  return {
    methods,
    onHandleSubmit,
    isLoading
  }
}

export default useSignInForm
