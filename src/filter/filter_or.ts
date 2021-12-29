import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const courses = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: 'React'
          }
        },
        {
          name: {
            contains: 'React Native',
          }
        }
      ],
      AND: {
        duration: 4
      },
    },
    include: {
      teacher: true
    }
  })

  console.log(JSON.stringify(courses, null, 4))
}

main()