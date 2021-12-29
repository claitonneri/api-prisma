import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() { 
  await prisma.teachers.delete({
    where: {
      id: 'e9a7e506-f8e9-4c6e-8bfd-23161e0465b9'
    }
  });

  console.log({ result: 'Teacher is deleted.' })
}

main()