// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {ErrorMessage} from "@hookform/error-message"
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form"
import {Input, Label} from "../ui"

type FormGeneratorProps = {
  form?: string
  label?: string
  controllerType: "input" | "select" | "textarea"
  inputType: "text" | "email" | "password"
  name: string
  placeholder: string
  options?: {label: string; id: string; value: string}[]
  rows?: number
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const FormGenerator = function FormGenerator({
  form,
  label,
  controllerType,
  inputType,
  name,
  placeholder,
  options,
  rows,
  register,
  errors
}: FormGeneratorProps) {
  switch (controllerType) {
    case "input":
      return (
        <Label htmlFor={`input-${label}`} className="flex flex-col gap-1">
          {label && label}
          <Input
            form={form}
            id={`input-${label}`}
            type={inputType}
            placeholder={placeholder}
            {...register(name)}
          />
          <ErrorMessage
            name={name}
            errors={errors}
            render={({message}) => (
              <p className="shc-description-base m-0 text-red-500">{message}</p>
            )}
          />
        </Label>
      )
    case "select":
      return (
        <Label htmlFor={`select-${label}`}>
          {label && label}
          <select form={form} id={`select-${label}`} {...register(name)}>
            {options?.length &&
              options?.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            name={name}
            errors={errors}
            render={({message}) => (
              <p className="shc-description-base m-0 text-red-500">{message}</p>
            )}
          />
        </Label>
      )
    case "textarea":
      return (
        <Label htmlFor={`textarea-${label}`} className="flex flex-col gap-1">
          {label && label}
          <textarea
            form={form}
            id={`textarea-${label}`}
            rows={rows}
            placeholder={placeholder}
            {...register(name)}
          />
          <ErrorMessage
            name={name}
            errors={errors}
            render={({message}) => (
              <p className="shc-description-base m-0 text-red-500">{message}</p>
            )}
          />
        </Label>
      )
    default:
      return null
  }
}

export default FormGenerator
