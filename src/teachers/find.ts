import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() { 
  const teacher = await prisma.teachers.findFirst({
    take: 1
  })

  console.log(teacher)
}

main()