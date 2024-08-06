// DONE REVIEWING: GITHUB COMMIT 3️⃣

import SignUpFormButtons from "../../../components/forms/sign-up/buttons"
import SignUpFormHighlightBar from "../../../components/forms/sign-up/highlight-bar"
import SignUpFormProvider from "../../../components/forms/sign-up/provider"
import SignUpFormSteps from "../../../components/forms/sign-up/steps"

const SignUpPage = function SignUpPage() {
  return (
    <div className="w-full flex-1">
      <div className="flex h-full flex-col gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col">
            <SignUpFormSteps />
            <div className="mt-6">
              <SignUpFormButtons />
            </div>
          </div>
          <div className="mt-20">
            <SignUpFormHighlightBar />
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUpPage
