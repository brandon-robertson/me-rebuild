const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
// Seed goods (exact from your INSERT; raceId null)
  await prisma.good.createMany({
    data: [
      { id: 1, name: 'Energy', level: 1, raceId: null, tech: 0, type: 0 },
      { id: 2, name: 'Sand', level: 1, raceId: null, tech: 0, type: 0 },
      { id: 3, name: 'Gravel', level: 1, raceId: null, tech: 0, type: 0 },
      { id: 4, name: 'Soils', level: 1, raceId: null, tech: 0, type: 0 },
      { id: 5, name: 'Water', level: 1, raceId: null, tech: 0, type: 0 },
      { id: 6, name: 'Trees', level: 1, raceId: null, tech: 0, type: 0 },
      { id: 7, name: 'Wood', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 8, name: 'Glass', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 16, name: 'Fruit', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 17, name: 'Fauna', level: 1, raceId: null, tech: 0, type: 0 },
      { id: 19, name: 'Charcoal', level: 3, raceId: null, tech: 0, type: 0 },
      { id: 20, name: 'Niter', level: 3, raceId: null, tech: 0, type: 0 },
      { id: 21, name: 'Sulfur', level: 1, raceId: null, tech: 0, type: 0 },
      { id: 22, name: 'Spirits', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 23, name: 'Meats', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 24, name: 'Flora', level: 1, raceId: null, tech: 0, type: 0 },
      { id: 25, name: 'Herbs', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 26, name: 'Spices', level: 3, raceId: null, tech: 0, type: 0 },
      { id: 27, name: 'Hides', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 28, name: 'Fibers', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 29, name: 'Fabrics', level: 3, raceId: null, tech: 0, type: 0 },
      { id: 30, name: 'Clothing', level: 4, raceId: null, tech: 0, type: 0 },
      { id: 31, name: 'Explosives', level: 4, raceId: null, tech: 0, type: 0 },
      { id: 32, name: 'Food Rations', level: 4, raceId: null, tech: 0, type: 0 },
      { id: 33, name: 'Mines', level: 7, raceId: null, tech: 500, type: 0 },
      { id: 34, name: 'Drones', level: 8, raceId: null, tech: 1000, type: 0 },
      { id: 35, name: 'Solar Collectors', level: 6, raceId: null, tech: 150000, type: 0 },
      { id: 36, name: 'Components', level: 5, raceId: null, tech: 0, type: 0 },
      { id: 37, name: 'Circuits', level: 6, raceId: null, tech: 0, type: 0 },
      { id: 38, name: 'Chemicals', level: 3, raceId: null, tech: 0, type: 0 },
      { id: 39, name: 'Computers', level: 7, raceId: null, tech: 0, type: 0 },
      { id: 40, name: 'Devices', level: 8, raceId: null, tech: 0, type: 0 },
      { id: 41, name: 'Oil', level: 4, raceId: null, tech: 0, type: 0 },
      { id: 42, name: 'Fossil Fuels', level: 5, raceId: null, tech: 0, type: 0 },
      { id: 43, name: 'Plastics', level: 5, raceId: null, tech: 0, type: 0 },
      { id: 44, name: 'Skarns', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 46, name: 'Clays', level: 2, raceId: null, tech: 0, type: 0 },
      { id: 47, name: 'Ceramics', level: 4, raceId: null, tech: 0, type: 0 },
      { id: 48, name: 'Armor', level: 7, raceId: null, tech: 50, type: 0 },
      { id: 49, name: 'Neural Nets', level: 7, raceId: null, tech: 0, type: 0 },
      { id: 50, name: 'Sensors', level: 6, raceId: null, tech: 0, type: 0 },
      { id: 51, name: 'Pig Iron', level: 4, raceId: null, tech: 0, type: 0 },
      { id: 52, name: 'Precious Metals', level: 4, raceId: null, tech: 0, type: 0 },
      { id: 53, name: '2D Materials', level: 9, raceId: null, tech: 0, type: 0 },
      { id: 54, name: 'Fuel Cells', level: 8, raceId: null, tech: 0, type: 0 },
      { id: 55, name: 'Shields', level: 8, raceId: null, tech: 50, type: 0 },
      { id: 56, name: 'Gemstones', level: 3, raceId: null, tech: 0, type: 0 },
      { id: 57, name: 'Catalysts', level: 4, raceId: null, tech: 0, type: 0 },
      { id: 58, name: 'Composites', level: 6, raceId: null, tech: 0, type: 0 },
      { id: 59, name: 'Steel', level: 5, raceId: null, tech: 0, type: 0 },
      { id: 60, name: 'Jewelry', level: 5, raceId: null, tech: 0, type: 0 },
      { id: 61, name: 'Port Package', level: 10, raceId: null, tech: 200000, type: 0 },
      { id: 62, name: 'Base Package', level: 10, raceId: null, tech: 1000000, type: 0 },
      { id: 63, name: 'Newbie Laser', level: 10, raceId: null, tech: 100000, type: 1 },
      { id: 64, name: 'Spring Gun', level: 10, raceId: null, tech: 500000, type: 1 },
    ],
    skipDuplicates: true,
  });

  // Seed races (based on IDs in ships)
  await prisma.race.createMany({
    data: [
      { id: 1, name: 'Xollian' },
      { id: 2, name: 'Mawlor' },
      { id: 3, name: 'Zycklirg' },
    ],
    skipDuplicates: true,
  });

  // Seed ranks (based on IDs in ships)
  await prisma.rank.createMany({
    data: [
      { id: 1, name: 'Level 1' },
      { id: 2, name: 'Level 2' },
      { id: 3, name: 'Level 3' },
      { id: 4, name: 'Level 4' },
      { id: 5, name: 'Level 5' },
      { id: 6, name: 'Level 6' },
      { id: 7, name: 'Level 7' },
    ],
    skipDuplicates: true,
  });

  // Seed weapons (exact from your INSERT)
  await prisma.weapon.createMany({
    data: [
      { id: 1, name: 'Newbie Laser', goodId: 63, raceId: null, racks: 0, stations: 1, accuracy: 1.00, volley: 1, ammunitionId: 1, generalDamage: 20, shieldDamage: 0, armorDamage: 0 },
      { id: 2, name: 'Spring Gun', goodId: 64, raceId: null, racks: 0, stations: 1, accuracy: 0.75, volley: 2, ammunitionId: 47, generalDamage: 0, shieldDamage: 0, armorDamage: 20 },
    ],
    skipDuplicates: true,
  });

  // Seed ships (exact from your INSERT)
  await prisma.ship.createMany({
    data: [
      { id: 1, name: 'Initiate', raceId: 1, rankId: 1, cargoSpace: 100, shields: 125, armor: 125, accel: 1.0, cost: 1000000, weaponsSlots: 0, shieldsSlots: 1, recharge: 1 },
      { id: 2, name: 'Recruit', raceId: 2, rankId: 1, cargoSpace: 100, shields: 150, armor: 200, accel: 1.5, cost: 1000000, weaponsSlots: 1, shieldsSlots: 1, recharge: 1 },
      { id: 3, name: 'Hatchling', raceId: 3, rankId: 1, cargoSpace: 100, shields: 150, armor: 100, accel: 1.0, cost: 1000000, weaponsSlots: 0, shieldsSlots: 2, recharge: 1 },
      { id: 4, name: 'Supply Ship', raceId: 2, rankId: 2, cargoSpace: 250, shields: 300, armor: 400, accel: 2.0, cost: 5000000, weaponsSlots: 2, shieldsSlots: 2, recharge: 1 },
      { id: 5, name: 'Corvette', raceId: 2, rankId: 3, cargoSpace: 100, shields: 350, armor: 450, accel: 3.0, cost: 7500000, weaponsSlots: 4, shieldsSlots: 2, recharge: 1 },
      { id: 6, name: 'Galactic Mover', raceId: 2, rankId: 4, cargoSpace: 400, shields: 350, armor: 450, accel: 3.5, cost: 15000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 7, name: 'Cruiser', raceId: 2, rankId: 5, cargoSpace: 50, shields: 650, armor: 500, accel: 4.0, cost: 25000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 8, name: 'Retribution', raceId: 2, rankId: 6, cargoSpace: 500, shields: 500, armor: 500, accel: 4.5, cost: 35000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 9, name: 'Dreadnought', raceId: 2, rankId: 7, cargoSpace: 150, shields: 750, armor: 750, accel: 5.0, cost: 45000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 10, name: 'Destiny Seeker', raceId: 1, rankId: 2, cargoSpace: 200, shields: 250, armor: 200, accel: 1.5, cost: 5000000, weaponsSlots: 0, shieldsSlots: 3, recharge: 1 },
      { id: 11, name: 'Blind Side', raceId: 1, rankId: 3, cargoSpace: 150, shields: 300, armor: 300, accel: 2.0, cost: 7500000, weaponsSlots: 2, shieldsSlots: 3, recharge: 1 },
      { id: 12, name: 'Venom', raceId: 1, rankId: 3, cargoSpace: 50, shields: 400, armor: 100, accel: 1.5, cost: 7500000, weaponsSlots: 0, shieldsSlots: 4, recharge: 1 },
      { id: 13, name: 'Specter', raceId: 1, rankId: 4, cargoSpace: 500, shields: 300, armor: 400, accel: 3.0, cost: 15000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 14, name: 'Predator', raceId: 1, rankId: 4, cargoSpace: 50, shields: 500, armor: 300, accel: 2.0, cost: 15000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 15, name: 'Dark Aura', raceId: 1, rankId: 5, cargoSpace: 100, shields: 700, armor: 400, accel: 3.0, cost: 25000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 16, name: 'Occult Blade', raceId: 1, rankId: 6, cargoSpace: 600, shields: 500, armor: 400, accel: 3.5, cost: 35000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 17, name: 'Chaos Prophet', raceId: 1, rankId: 7, cargoSpace: 200, shields: 700, armor: 600, accel: 4.0, cost: 45000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 18, name: 'Parasite', raceId: 3, rankId: 2, cargoSpace: 25, shields: 150, armor: 125, accel: 1.0, cost: 1000000, weaponsSlots: 0, shieldsSlots: 4, recharge: 1 },
      { id: 19, name: 'Stellar Leech', raceId: 3, rankId: 3, cargoSpace: 200, shields: 225, armor: 250, accel: 2.0, cost: 5000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 20, name: 'Drone', raceId: 3, rankId: 3, cargoSpace: 25, shields: 200, armor: 250, accel: 1.5, cost: 5000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 21, name: 'Locust', raceId: 3, rankId: 2, cargoSpace: 50, shields: 100, armor: 200, accel: 2.0, cost: 5000000, weaponsSlots: 1, shieldsSlots: 3, recharge: 1 },
      { id: 22, name: 'Pestilence', raceId: 3, rankId: 3, cargoSpace: 250, shields: 250, armor: 300, accel: 2.5, cost: 7500000, weaponsSlots: 2, shieldsSlots: 4, recharge: 1 },
      { id: 23, name: 'Cluster Guard', raceId: 3, rankId: 4, cargoSpace: 50, shields: 400, armor: 300, accel: 2.0, cost: 7500000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 24, name: 'Planetary Scourge', raceId: 3, rankId: 4, cargoSpace: 450, shields: 400, armor: 400, accel: 3.0, cost: 15000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 25, name: 'Swarm Leader', raceId: 3, rankId: 5, cargoSpace: 100, shields: 500, armor: 600, accel: 3.5, cost: 25000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 26, name: 'Tarantula', raceId: 3, rankId: 6, cargoSpace: 550, shields: 400, armor: 500, accel: 3.5, cost: 35000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
      { id: 27, name: 'Black Widow', raceId: 3, rankId: 7, cargoSpace: 50, shields: 650, armor: 800, accel: 4.0, cost: 45000000, weaponsSlots: 0, shieldsSlots: 0, recharge: 1 },
    ],
    skipDuplicates: true,
  });

  console.log('Seeding complete');
}


main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());