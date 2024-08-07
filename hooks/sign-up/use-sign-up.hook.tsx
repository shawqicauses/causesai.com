"use client"

// DONE REVIEWING: GITHUB COMMIT 2️⃣

import {useSignUp} from "@clerk/nextjs"
import {zodResolver} from "@hookform/resolvers/zod"
import {useRouter} from "next/navigation"
import {Dispatch, SetStateAction, useState} from "react"
import {useForm} from "react-hook-form"
import {toast} from "sonner"
import {SignUpSchema, SignUpSchemaParams} from "../../schemas/auth.schema"
import {onCompleteSignUpAttempt} from "../../server/actions/auth"

const useSignUpForm = function useSignUpForm() {
  const router = useRouter()
  const {signUp, isLoaded, setActive} = useSignUp()
  const methods = useForm<SignUpSchemaParams>({
    resolver: zodResolver(SignUpSchema),
    mode: "onChange",
    defaultValues: {type: "owner"}
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onGenerateOTP = async function onGenerateOTP(
    username: string,
    emailAddress: string,
    password: string,
    onNext: Dispatch<SetStateAction<number>>
  ) {
    if (!isLoaded) return
    try {
      await signUp.create({username, emailAddress, password})
      await signUp.prepareEmailAddressVerification({strategy: "email_code"})
      onNext((previous) => previous + 1)
    } catch (error: any) {
      toast("Error", {
        description:
          error.errors[0].longMessage || "An error occurred while signing up. Please try again."
      })
    }
  }

  const onHandleSubmit = methods.handleSubmit(async (data: SignUpSchemaParams) => {
    if (!isLoaded) return

    if (data.otp.length !== 6) {
      toast("Error", {
        description: "Please enter a valid OTP."
      })

      return
    }

    try {
      setIsLoading(true)
      const signUpAttempt = await signUp.attemptEmailAddressVerification({code: data.otp})

      if (signUpAttempt.status !== "complete")
        return {
          errors: [{message: "An error occurred while attempting to sign up. Please try again."}]
        }

      if (signUpAttempt.status === "complete") {
        if (!signUp.createdUserId) return
        const response = await onCompleteSignUpAttempt(signUp.createdUserId, data.type, data.name)

        if (response?.status === 200 && response?.data?.user) {
          await setActive({session: signUpAttempt.createdSessionId})
          router.push("/dashboard")
        }

        if (response?.status === 500)
          toast("Error", {
            description: "An error occurred while completing signing up. Please try again."
          })
      }
    } catch (error: any) {
      toast("Error", {
        description:
          error.errors[0].longMessage || "An error occurred while signing up. Please try again."
      })
    } finally {
      setIsLoading(false)
    }
  })

  return {
    methods,
    isLoading,
    onGenerateOTP,
    onHandleSubmit
  }
}

export default useSignUpForm
