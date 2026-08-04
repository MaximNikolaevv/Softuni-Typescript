import { Inventory, Dragon, Knight, Wizard, BaseMonster } from "../TypescriptExamExercises02/monster-types.js";
import { Monster, WithId, MonsterType, Item } from "../TypescriptExamExercises02/modelsss.js";

export class ArenaManager {

    private monsters: BaseMonster[] = [];

    private inventory: Inventory<Item> = new Inventory<Item>();


    addMonster(monster: BaseMonster): string {
        this.monsters.push(monster);
        return `Monster "${monster.name}" entered the arena.`;
    };

    addItem(item: Item): string {
        this.inventory.add(item);
        return `Item "${item.name}" added to inventory.`;
    };

    equipItemToMonster(monsterId: number, itemId: number): string | undefined {

        const monster = this.monsters.find((monster) => monster.id === monsterId);

        if (!monster) {
            return `ERROR: Monster with ID ${monsterId} not found.`;
        };

        const item = this.inventory.findById(itemId);

        if (!item) {
            return `ERROR: Item with ID ${itemId} not found.`;
        };

        this.inventory.remove(itemId);

        monster.items.push(item);

        return `Item "${item.name}" equipped to "${monster.name}".`;
    };


    showArena(): string[] {

        const result: string[] = [];

        result.push("=== Arena Monsters ===");

        for (const monster of this.monsters) {

            if (monster instanceof Dragon) {
                result.push(`[${monster.type}] ${monster.name} (Level:${monster.level}, FirePower:${monster.firePower}) Health:${monster.calculateHealth()}`);
            }
            if (monster instanceof Wizard) {
                result.push(`[${monster.type}] ${monster.name} (Level:${monster.level}, Mana:${monster.magic}) Health:${monster.calculateHealth()}`);
            }
            if (monster instanceof Knight) {
                result.push(`[${monster.type}] ${monster.name} (Level:${monster.level}, Armor:${monster.swordSkill}) Health:${monster.calculateHealth()}`);
            }

        }

        result.push("======================");

        result.join("\n");

        return result;
    }

}