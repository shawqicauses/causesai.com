// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {Dispatch, Fragment, SetStateAction} from "react"
import OTPInput from "../../otp-input"

type SignUpFormOTPProps = {
  onOTP: string
  setOnOTP: Dispatch<SetStateAction<string>>
}

const SignUpFormOTP = function SignUpFormOTP({onOTP, setOnOTP}: SignUpFormOTPProps) {
  return (
    <Fragment>
      <h2 className="text-xl-2 font-bold leading-9 tracking-tight text-foreground">
        Enter your OTP
      </h2>
      <p className="mt-2 text-sm leading-normal text-muted-foreground">
        Please enter the one-time password that was sent to your email.
      </p>
      <div className="flex w-full justify-center">
        <OTPInput onOTP={onOTP} setOnOTP={setOnOTP} />
      </div>
    </Fragment>
  )
}

export default SignUpFormOTP
