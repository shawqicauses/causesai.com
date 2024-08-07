// DONE REVIEWING: GITHUB COMMIT 1️⃣

export const SIGN_UP_INFORMATION_FORM: {
  id: number
  controllerType: "input" | "select" | "textarea"
  inputType: "text" | "email" | "password"
  name: string
  placeholder: string
}[] = [
  {
    id: 1,
    controllerType: "input",
    inputType: "text",
    name: "name",
    placeholder: "Full name"
  },
  {
    id: 2,
    controllerType: "input",
    inputType: "email",
    name: "email",
    placeholder: "Email"
  },
  {
    id: 3,
    controllerType: "input",
    inputType: "email",
    name: "emailConfirmation",
    placeholder: "Confirm email"
  },
  {
    id: 4,
    controllerType: "input",
    inputType: "password",
    name: "password",
    placeholder: "Password"
  },
  {
    id: 5,
    controllerType: "input",
    inputType: "password",
    name: "passwordConfirmation",
    placeholder: "Confirm password"
  }
]

export default {SIGN_UP_INFORMATION_FORM}
