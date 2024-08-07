// DONE REVIEWING: GITHUB COMMIT 1️⃣

import Link from "next/link"
import SignInFormProvider from "../../../components/forms/sign-in/provider"
import {Button} from "../../../components/ui"

const SignInPage = function SignInPage() {
  return (
    <div className="w-full flex-1">
      <div className="flex h-full flex-col gap-3">
        <SignInFormProvider>
          <div className="flex w-full flex-col items-center gap-3">
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <p className="text-sm text-muted-foreground">
              Do not have an account?{" "}
              <Button variant="link" className="text-foreground !shadow-none" asChild>
                <Link href="/auth/sign-up">Sign Up</Link>
              </Button>
            </p>
          </div>
        </SignInFormProvider>
      </div>
    </div>
  )
}

export default SignInPage
