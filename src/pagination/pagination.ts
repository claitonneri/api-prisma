import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  let skip = 0
  let exists = true

  while(exists){
    const courses = await prisma.courses.findMany({
      skip: skip,
      take: 2
    })

    skip += 2
    console.log(courses)
    console.log('---------------')

    if (!courses.length) {
      exists = false
    }
  }
}

main()