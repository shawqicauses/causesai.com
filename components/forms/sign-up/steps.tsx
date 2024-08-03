"use client"

// DONE REVIEWING: GITHUB COMMIT

import {useState} from "react"
import {useFormContext} from "react-hook-form"
import {useAuthentication} from "../../../contexts/authentication"
import SignUpFormTypeSelection from "./type-selection"

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
    default:
      return null
  }
}

export default SignUpFormSteps
