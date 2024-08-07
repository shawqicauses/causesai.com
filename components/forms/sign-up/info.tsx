// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {Fragment} from "react"
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form"
import {SIGN_UP_INFORMATION_FORM} from "../../../constants/forms"
import FormGenerator from "../generator"

type SignUpFormInfoProps = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const SignUpFormInfo = function SignUpFormInfo({register, errors}: SignUpFormInfoProps) {
  return (
    <Fragment>
      <h2 className="text-xl-2 font-bold leading-9 tracking-tight text-foreground">
        Account information
      </h2>
      <p className="mt-2 text-sm leading-normal text-muted-foreground">
        Please enter your name, email, and password.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        {SIGN_UP_INFORMATION_FORM.map((field) => (
          <FormGenerator
            key={field.id}
            controllerType={field.controllerType}
            inputType={field.inputType}
            name={field.name}
            placeholder={field.placeholder}
            register={register}
            errors={errors}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default SignUpFormInfo
