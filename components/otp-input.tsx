"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Dispatch, SetStateAction} from "react"
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "./ui/otp-input"

type OTPInputProps = {
  onOTP: string
  setOnOTP: Dispatch<SetStateAction<string>>
}

const OTPInput = function OTPInput({onOTP, setOnOTP}: OTPInputProps) {
  return (
    <InputOTP maxLength={6} value={onOTP} onChange={(otp) => setOnOTP(otp)}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

export default OTPInput
