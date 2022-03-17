import "reflect-metadata";

import { PrismaClient } from "./node_modules/.prisma/client/index";
// need to update this to point to a generated path

const prisma = new PrismaClient();

async function main() {
  // Connect the client
  await prisma.$connect()
  // ... you will write your Prisma Client queries here
  const allEntries = await prisma.journalentries.findMany()
  console.log(allEntries)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })