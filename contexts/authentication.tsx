"use client"

// DONE REVIEWING: GITHUB COMMIT

import {createContext, Dispatch, PropsWithChildren, SetStateAction, useState} from "react"

type ValuesInitialType = {
  stepCurrent: number
  setStepCurrent: Dispatch<SetStateAction<number>>
}

const valuesInitial: ValuesInitialType = {
  stepCurrent: 1,
  setStepCurrent: () => undefined
}

const context = createContext(valuesInitial)
const {Provider} = context

const AuthenticationContextProvider = function AuthenticationContextProvider({
  children
}: PropsWithChildren) {
  const [stepCurrent, setStepCurrent] = useState<number>(valuesInitial.stepCurrent)
  const values = {stepCurrent, setStepCurrent}
  return <Provider value={values}>{children}</Provider>
}

export default AuthenticationContextProvider
