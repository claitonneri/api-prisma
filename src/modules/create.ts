import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const module = await prisma.modules.create({
    data: {
      name: 'Prisma ORM',
      description: 'Aprendendo sobre Prisma ORM',
      courses_modules: {
        create: {
          course: {
            connect: {
              id: 'ce199c55-28e9-4342-8486-ece9cc33b8f3'
            }
          }
        }
      }
    }
  })

  console.log(module)
}

main()