import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const testTableQuery = {
  id: true,
  task_name: true,
};


const testFunction = async () => {

  const taskResult = await prisma.testTable.create({
    data: {
      task_name: "Testing",
    },
    select: Prisma.validator<Prisma.TestTableSelect>()(testTableQuery),
  });
  console.log(taskResult.id.toString());
}


testFunction();