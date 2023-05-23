import { PrismaClient } from "@prisma/client";
import { readFile } from "fs/promises";

const prisma = new PrismaClient();

async function main() {
  // remove all data before in movie table
  await prisma.movie.deleteMany({});

  // read movies.json file
  const moviesJson = await readFile("movies.json", "utf8");
  const moviesData = JSON.parse(moviesJson);

  await prisma.movie.createMany({
    data: moviesData,
  });

  console.log("Seed data created successfully");
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
