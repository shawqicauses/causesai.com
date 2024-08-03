"use client"

// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from "react"

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

export const AuthenticationContextProvider = function AuthenticationContextProvider({
  children
}: PropsWithChildren) {
  const [stepCurrent, setStepCurrent] = useState<number>(valuesInitial.stepCurrent)
  const values = {stepCurrent, setStepCurrent}
  return <Provider value={values}>{children}</Provider>
}

export const useAuthentication = function useAuthentication() {
  const state = useContext(context)
  return state
}
