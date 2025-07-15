const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Seed Goods (all from original data_game.sql)
  await prisma.good.createMany({
    data: [
      { id: 1, name: 'Fuel', basePrice: 10 },
      { id: 2, name: 'Organics', basePrice: 20 },
      { id: 3, name: 'Ore', basePrice: 30 },
      { id: 4, name: 'Goods', basePrice: 40 },
      { id: 5, name: 'Equipment', basePrice: 50 },
    ],
    skipDuplicates: true, // Avoid errors if re-run
  });

  console.log('Seeding complete');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());