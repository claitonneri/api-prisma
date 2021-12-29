import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const teacher = await prisma.teachers.update({
    where: {
      id: "e9a7e506-f8e9-4c6e-8bfd-23161e0465b9"
    },
    data: {
      name: 'Claiton Neri Didoné'
    }
  })

  console.log(teacher)
 }

main()