// DONE REVIEWING: GITHUB COMMIT 1️⃣

import SignUpFormProvider from "../../../components/forms/sign-up/provider"

const SignUpPage = function SignUpPage() {
  return (
    <div className="w-full flex-1 py-36 md:px-16">
      <div className="flex h-full flex-col gap-3">
        <SignUpFormProvider />
      </div>
    </div>
  )
}

export default SignUpPage
