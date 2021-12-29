import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const courses_modules = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: 'Curso de React Native',
          duration: 2,
          description: 'Desenvolvimento de Aplicativos Móveis',
          teacher: {
            create: {
              name: 'Claiton Neri'
            }
          }
        }
      },
      module: {
        create: {
          name: 'Hooks Avançados',
          description: 'Aprendendo sobre Hooks',
        }
      }
    }
  })
  console.log(courses_modules)
}

main()