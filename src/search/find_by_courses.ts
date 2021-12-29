import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const courses = await prisma.courses.findMany({
    where: {
      id: 'ce546786-03fc-44dc-9d5b-8e7ec54238bb'
    },
    include: {
      courses_modules: true
    }
  })

  console.log(JSON.stringify(courses, null, 4))
}

main()