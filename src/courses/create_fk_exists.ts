import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() { 
  const course = await prisma.courses.create({
    data: {
      name: 'Curso de ReactJS',
      duration: 2,
      description: 'Desenvolvimento de interfaces web',
      teacher_id: '95178910-85e4-4b9b-8d62-d2aa02884c12'
    }
  })

  console.log({result: course})
}

main()