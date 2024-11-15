import { GamePlatform, GameStatus, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  await prisma.game.deleteMany();
  await prisma.category.deleteMany();

  await prisma.category.createMany({
    data: [
      { title: 'action' },
      { title: 'adventure' },
      { title: 'rpg' },
      { title: 'strategy' },
      { title: 'sports' },
      { title: 'horror' },
    ],
  });

  const createdCategories = await prisma.category.findMany();
  const platforms = ['xbox', 'ps', 'pc', 'nintendo'];
  const status = ['available', 'unavailable'];

  const gamesData = Array.from({ length: 500 }, () => ({
    title: `Jogo ${faker.commerce.product()}`,
    description: faker.lorem.sentences(2),
    price: parseFloat(faker.commerce.price({ min: 10, max: 100, dec: 2 })),
    categoryId: faker.helpers.arrayElement(createdCategories).id,
    platform: faker.helpers.arrayElement(platforms) as GamePlatform,
    status: faker.helpers.arrayElement(status) as GameStatus,
    discount: 0,
  }));

  await prisma.game.createMany({
    data: gamesData,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
