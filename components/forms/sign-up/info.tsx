// DONE REVIEWING: GITHUB COMMIT

import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form"

type SignUpFormInfoProps = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const SignUpFormInfo = function SignUpFormInfo({register, errors}: SignUpFormInfoProps) {
  return <div>Sign Up Form Info</div>
}

export default SignUpFormInfo
