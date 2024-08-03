// DONE REVIEWING: GITHUB COMMIT
import {Dispatch, Fragment, SetStateAction} from "react"
import {FieldValues, UseFormRegister} from "react-hook-form"
import SingUpFormTypeSelectionCard from "./type-selection-card"

type SignUpFormTypeSelectionProps = {
  register: UseFormRegister<FieldValues>
  userType: "owner" | "student"
  setUserType: Dispatch<SetStateAction<"owner" | "student">>
}

const SignUpFormTypeSelection = function SignUpFormTypeSelection({
  register,
  userType,
  setUserType
}: SignUpFormTypeSelectionProps) {
  return (
    <Fragment>
      <h2 className="text-xl-2 font-bold leading-9 tracking-tight text-foreground">
        Create an account
      </h2>
      <p className="mt-2 text-sm leading-normal text-muted-foreground">
        Tell us about your-self. What do you want? Let us tailor your experience so it best suits
        you.
      </p>
      <div className="mt-6">
        <SingUpFormTypeSelectionCard
          title="I own a business"
          description="Setting up my account for my business."
          value="owner"
          register={register}
          userType={userType}
          setUserType={setUserType}
        />
      </div>
      <div className="mt-4">
        <SingUpFormTypeSelectionCard
          title="I am a student"
          description="Looking to learn more about Causes AI."
          value="student"
          register={register}
          userType={userType}
          setUserType={setUserType}
        />
      </div>
    </Fragment>
  )
}

export default SignUpFormTypeSelection
