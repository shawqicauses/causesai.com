"use client"

// DONE REVIEWING: GITHUB COMMIT 2️⃣

import dynamic from "next/dynamic"
import {useState} from "react"
import {useFormContext} from "react-hook-form"
import {useAuthentication} from "../../../contexts/authentication"
import SignUpFormTypeSelection from "./type-selection"

const SignUpFormInfo = dynamic(() => import("./info"), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const SignUpFormSteps = function SignUpFormSteps() {
  const {register, formState, setValue} = useFormContext()
  const {stepCurrent} = useAuthentication()
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner")
  const [onOTP, setOnOTP] = useState<string>("")

  setValue("otp", onOTP)

  switch (stepCurrent) {
    case 1:
      return (
        <SignUpFormTypeSelection
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      )
    case 2:
      return <SignUpFormInfo register={register} errors={formState.errors} />
    default:
      return null
  }
}

export default SignUpFormSteps
