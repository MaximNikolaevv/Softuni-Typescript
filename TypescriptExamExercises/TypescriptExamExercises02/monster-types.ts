import { Monster, WithId, MonsterType, Item } from "../TypescriptExamExercises02/modelsss.js";

export class Inventory<T extends WithId> {

    private records: T[] = []; //T[] → масив от елементи T - = [] → започва като празен масив.

    add(item: T): void {

        this.records.push(item);
    }

    findById(id: number): T | undefined {
        return this.records.find((item) => item.id === id);
    }

    remove(id: number): void | undefined {
        const index = this.records.findIndex((item) => item.id === id);
        if (index !== -1) {
            this.records.splice(index, 1);
        }
    }

}


export abstract class BaseMonster implements Monster {

    constructor(
        public id: number,
        public name: string,
        public level: number,
        public type: MonsterType
    ) { }

    items: Item[] = [];

    abstract calculateHealth(): number;

    abstract attack(): number;

}

export class Dragon extends BaseMonster {

    constructor(
        id: number,
        name: string,
        level: number,
        public firePower: number
    ) {
        super(id, name, level, MonsterType.Dragon);
    }

    calculateHealth(): number {
        return (this.level * 20) + (this.firePower * 10);
    }

    // @PowerStrike
    attack(): number {
        return this.firePower * 3;
    }

}


export class Knight extends BaseMonster {

    constructor(
        id: number,
        name: string,
        level: number,
        public swordSkill: number
    ) {
        super(id, name, level, MonsterType.Knight);
    }

    calculateHealth(): number {
        return (this.level * 30) + (this.swordSkill * 5);
    };

    attack(): number {
        return this.swordSkill * 2;
    };

};


export class Wizard extends BaseMonster {

    constructor(
        id: number,
        name: string,
        level: number,
        public magic: number
    ) {
        super(id, name, level, MonsterType.Wizard);
    }

    calculateHealth(): number {
        return (this.level * 15) + (this.magic * 8);
    }

    attack(): number {
        return this.magic * 4;
    }

}