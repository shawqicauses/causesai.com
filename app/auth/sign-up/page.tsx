// DONE REVIEWING: GITHUB COMMIT 2️⃣

import SignUpFormProvider from "../../../components/forms/sign-up/provider"
import SignUpFormSteps from "../../../components/forms/sign-up/steps"

const SignUpPage = function SignUpPage() {
  return (
    <div className="w-full flex-1">
      <div className="flex h-full flex-col gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col">
            <SignUpFormSteps />
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUpPage
