import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const courses = await prisma.courses.findMany({
    where: {
      name: {
        startsWith: 'curso',
        mode: "insensitive",
      }
    }
  })

  console.log(courses)
}

main()