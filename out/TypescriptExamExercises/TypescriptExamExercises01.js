"use strict";
var ItemRarity;
(function (ItemRarity) {
    ItemRarity["Common"] = "COMMON";
    ItemRarity["Rare"] = "RARE";
    ItemRarity["Legendary"] = "LEGENDARY";
})(ItemRarity || (ItemRarity = {}));
class Inventory {
    MyInventory = []; //MyInventory трябва да бъде масив, който съдържа само Item. // Това създава празен масив при създаване на обекта.
    constructor() { }
    addItem(item) {
        this.MyInventory.push(item);
    }
    findItem(code) {
        return this.MyInventory.find(item => item.code === code);
    }
    removeItem(code) {
        let itemIndex = this.MyInventory.findIndex(item => item.code === code);
        if (itemIndex !== -1) {
            this.MyInventory.splice(itemIndex, 1);
        }
        ;
    }
}
getTotalWeight();
void {};
getItemsByRarity(rarity, ItemRarity);
Item[];
{
    return [];
}
getPotions();
Potion[];
{
    return [];
}
getStrongestPotion();
Potion | undefined;
{
    return undefined;
}
countLegendaryItems();
void {};
printInventory();
void {};
const inventory = new Inventory();
const ironSword = {
    code: "I001",
    title: "Iron Sword",
    weight: 5,
    rarity: ItemRarity.Common,
};
const steelShield = {
    code: "I002",
    title: "Steel Shield",
    weight: 8,
    rarity: ItemRarity.Rare,
};
const megaHealthPotion = {
    code: "P001",
    title: "Mega Health Potion",
    weight: 2,
    rarity: ItemRarity.Legendary,
    healAmount: 150,
};
const smallPotion = {
    code: "P002",
    title: "Small Potion",
    weight: 1,
    rarity: ItemRarity.Common,
    healAmount: 25,
};
inventory.addItem(ironSword);
inventory.addItem(steelShield);
inventory.addItem(megaHealthPotion);
inventory.addItem(smallPotion);
inventory.findItem("P001");
inventory.removeItem("I002");
inventory.getTotalWeight();
inventory.getItemsByRarity(ItemRarity.Common);
inventory.getPotions();
inventory.getStrongestPotion();
inventory.countLegendaryItems();
inventory.printInventory();
//# sourceMappingURL=TypescriptExamExercises01.js.map