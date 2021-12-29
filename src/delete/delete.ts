import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: 'd889bc7f-4cbe-4541-b493-5f1072d5685a'
    }
  })
  
  console.log(result)
}

main()