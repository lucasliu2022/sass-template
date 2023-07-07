// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/utils/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany()
  console.log(users)
  res.status(200).json({ name: users })
}
