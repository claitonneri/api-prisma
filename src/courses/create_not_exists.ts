import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const course = await prisma.courses.create({
    data: {
      name: 'Curso de NodeJS',
      duration: 2,
      description: 'Desenvolvimento de APIs',
      teacher: {
        create: {
          name: 'Nicolas Estevão'
        }
      }
    }
  })

  console.log({result: course})
 }

main()