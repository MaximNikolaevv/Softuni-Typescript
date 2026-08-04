import { MonsterType } from "../TypescriptExamExercises02/modelsss.js";
export class Inventory {
    records = []; //T[] → масив от елементи T - = [] → започва като празен масив.
    add(item) {
        this.records.push(item);
    }
    findById(id) {
        return this.records.find((item) => item.id === id);
    }
    remove(id) {
        const index = this.records.findIndex((item) => item.id === id);
        if (index !== -1) {
            this.records.splice(index, 1);
        }
    }
}
export class BaseMonster {
    id;
    name;
    level;
    type;
    constructor(id, name, level, type) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.type = type;
    }
    items = [];
}
export class Dragon extends BaseMonster {
    firePower;
    constructor(id, name, level, firePower) {
        super(id, name, level, MonsterType.Dragon);
        this.firePower = firePower;
    }
    calculateHealth() {
        return (this.level * 20) + (this.firePower * 10);
    }
    // @PowerStrike
    attack() {
        return this.firePower * 3;
    }
}
export class Knight extends BaseMonster {
    swordSkill;
    constructor(id, name, level, swordSkill) {
        super(id, name, level, MonsterType.Knight);
        this.swordSkill = swordSkill;
    }
    calculateHealth() {
        return (this.level * 30) + (this.swordSkill * 5);
    }
    ;
    attack() {
        return this.swordSkill * 2;
    }
    ;
}
;
export class Wizard extends BaseMonster {
    magic;
    constructor(id, name, level, magic) {
        super(id, name, level, MonsterType.Wizard);
        this.magic = magic;
    }
    calculateHealth() {
        return (this.level * 15) + (this.magic * 8);
    }
    attack() {
        return this.magic * 4;
    }
}
//# sourceMappingURL=monster-types.js.map