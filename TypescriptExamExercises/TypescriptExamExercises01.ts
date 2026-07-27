enum ItemRarity {
    Common = "COMMON",
    Rare = "RARE",
    Legendary = "LEGENDARY"
}

interface Identifiable {
    code: string;
}

interface Item extends Identifiable {
    title: string;
    weight: number;
    rarity: ItemRarity;
}

interface Potion extends Item {
    healAmount: number;
}


class Inventory {

    public MyInventory: Item[] = []; //MyInventory трябва да бъде масив, който съдържа само Item. // Това създава празен масив при създаване на обекта.

    constructor(


    ) { }

    addItem(item: Item): void {
        this.MyInventory.push(item);
    }


    findItem(code: string): Item | undefined {
        return this.MyInventory.find(item => item.code === code);

    }



    removeItem(code: string): void {

        let itemIndex = this.MyInventory.findIndex(item => item.code === code);
        if (itemIndex !== -1) {
            this.MyInventory.splice(itemIndex, 1);
        };
    }


    getTotalWeight(): void {

        console.log(this.MyInventory.reduce((totalWeight, item) => totalWeight + item.weight, 0));
    }

    getItemsByRarity(rarity: ItemRarity): Item[] {
        return [];
    }




}



const inventory = new Inventory();

const ironSword: Item = {
    code: "I001",
    title: "Iron Sword",
    weight: 5,
    rarity: ItemRarity.Common,
};

const steelShield: Item = {
    code: "I002",
    title: "Steel Shield",
    weight: 8,
    rarity: ItemRarity.Rare,
};

const megaHealthPotion: Potion = {
    code: "P001",
    title: "Mega Health Potion",
    weight: 2,
    rarity: ItemRarity.Legendary,
    healAmount: 150,
};

const smallPotion: Potion = {
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

