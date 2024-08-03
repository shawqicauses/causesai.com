"use server"

// DONE REVIEWING: GITHUB COMMIT

import prisma from "../db"

export const onCompleteSignUpAttempt = async function onCompleteSignUpAttempt(
  createdUserId: string,
  createdUserType: string,
  createdUserName: string
) {
  try {
    const userRegistered = await prisma.user.create({
      data: {
        clerk_id: createdUserId,
        type: createdUserType,
        full_name: createdUserName,
        billing: {create: {}}
      },
      select: {id: true, type: true, full_name: true}
    })

    if (userRegistered) return {status: 200, data: {user: userRegistered}}
  } catch (error) {
    return {status: 500, error}
  }
}

export default {onCompleteSignUpAttempt}
