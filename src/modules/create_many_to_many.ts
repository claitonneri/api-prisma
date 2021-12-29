import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const courses_modules = await prisma.coursesModules.create({
    data: {
      course_id: 'ce199c55-28e9-4342-8486-ece9cc33b8f3',
      module_id: '90f082e6-1d59-49d6-9f4a-800b900e0865'
    }
  })

  console.log(courses_modules)
}

main()