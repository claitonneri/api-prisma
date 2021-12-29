import { Modules, Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const modules = await prisma.$queryRaw<Modules[]>(Prisma.sql`SELECT * FROM modules`)

  console.log(modules)
}

main()