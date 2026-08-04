import { Dragon, Knight, Wizard } from "./monster-types.js";
import { ArenaManager } from "./arenaManager.js";

const arena = new ArenaManager();


// =====================
// CREATE MONSTERS
// =====================

const dragon = new Dragon(
    1,
    "Smaug",
    10,
    50
);


const knight = new Knight(
    2,
    "Arthur",
    8,
    40
);


const wizard = new Wizard(
    3,
    "Merlin",
    12,
    30
);


// =====================
// ADD MONSTERS
// =====================

console.log(
    arena.addMonster(dragon)
);

console.log(
    arena.addMonster(knight)
);

console.log(
    arena.addMonster(wizard)
);


// =====================
// CREATE ITEMS
// =====================

const fireSword = {
    id: 100,
    name: "Fire Sword",
    bonus: 20,
    price: 120
};


const magicRing = {
    id: 101,
    name: "Magic Ring",
    bonus: 15,
    price: 90
};


const dragonShield = {
    id: 102,
    name: "Dragon Shield",
    bonus: 50,
    price: 200
};


// =====================
// ADD ITEMS
// =====================

console.log(
    arena.addItem(fireSword)
);

console.log(
    arena.addItem(magicRing)
);

console.log(
    arena.addItem(dragonShield)
);


// =====================
// EQUIP ITEMS
// =====================

console.log(
    arena.equipItemToMonster(1, 100)
);


console.log(
    arena.equipItemToMonster(3, 101)
);


console.log(
    arena.equipItemToMonster(2, 102)
);


// =====================
// ERRORS TEST
// =====================

console.log(
    arena.equipItemToMonster(99, 100)
);


console.log(
    arena.equipItemToMonster(1, 999)
);


// =====================
// SHOW ARENA
// =====================

console.log(
    arena.showArena()
);


// =====================
// TEST ATTACKS
// =====================

console.log(
    "Dragon attack:",
    dragon.attack()
);


console.log(
    "Knight attack:",
    knight.attack()
);


console.log(
    "Wizard attack:",
    wizard.attack()
);


// =====================
// TEST HEALTH
// =====================

console.log(
    "Dragon health:",
    dragon.calculateHealth()
);


console.log(
    "Knight health:",
    knight.calculateHealth()
);


console.log(
    "Wizard health:",
    wizard.calculateHealth()
);