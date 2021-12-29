import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.create({
    data: {
      name: 'Curso de React Native',
      duration: 2,
      description: 'Desenvolvimento de aplicativos movéis',
      teacher: {
        connect: {
          id: 'f6b7d9d4-f4a8-4763-9013-63d13e7be9d5'
        }
      }
    }
  })

  console.log({result: course})
}

main()