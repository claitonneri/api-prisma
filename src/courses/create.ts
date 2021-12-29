import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Java',
      duration: 500,
      description: 'Neste curso será abordado o Java 11',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Ana Tieli Dutra',
          },
          create: {
            name: 'Ana Tieli Dutra'
          }
        }
      }
    }
  })

  console.log({result})
}

main()