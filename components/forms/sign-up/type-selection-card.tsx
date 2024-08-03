"use client"

// DONE REVIEWING: GITHUB COMMIT

import {UserIcon} from "lucide-react"
import {Dispatch, SetStateAction} from "react"
import {FieldValues, UseFormRegister} from "react-hook-form"
import {cn} from "../../../lib/utils"
import {Card, CardContent, CardDescription, Input, Label} from "../../ui"

type SignUpFormTypeSelectionCardProps = {
  title: string
  description: string
  value: string
  register: UseFormRegister<FieldValues>
  userType: "owner" | "student"
  setUserType: Dispatch<SetStateAction<"owner" | "student">>
}

const SingUpFormTypeSelectionCard = function SingUpFormTypeSelectionCard({
  title,
  description,
  value,
  register,
  userType,
  setUserType
}: SignUpFormTypeSelectionCardProps) {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          "w-full cursor-pointer",
          userType === value && "border-primary bg-primary-foreground/75"
        )}>
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                "flex justify-center p-3",
                userType === value && "border-primary bg-primary"
              )}>
              <UserIcon
                size={30}
                className={cn(userType === value ? "text-white" : "text-muted-foreground/50")}
              />
            </Card>
            <div>
              <CardDescription className="block text-sm font-medium leading-none text-foreground">
                {title}
              </CardDescription>
              <CardDescription className="mt-2 text-xs font-normal leading-none text-muted-foreground">
                {description}
              </CardDescription>
            </div>
          </div>
          <div>
            <div
              className={cn(
                "h-2.5 w-2.5 rounded-full bg-opacity-50",
                userType === value ? "bg-primary" : "bg-muted"
              )}>
              <Input
                {...register("type", {onChange: (event) => setUserType(event.target.value)})}
                id={value}
                type="radio"
                value={value}
                className="hidden"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  )
}

export default SingUpFormTypeSelectionCard
