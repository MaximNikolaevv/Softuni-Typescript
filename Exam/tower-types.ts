import { WithId, TowerBase, TowerType, Enemy } from '../Exam/models';
import { Upgraded } from '../Exam/decorators';

export class BuildQueue<T extends WithId> {

    private slots: T[] = [];



    public enqueue(item: T): void {
        this.slots.push(item);
    }

    public dequeue(id: number): T | undefined {

        let foundItem = this.slots.findIndex(item => item.id === id);

        if (foundItem !== -1) {
            return this.slots.splice(foundItem, 1)[0];
        } else {
            return undefined;
        }
    }

    public getAll(): T[] {
        return [...this.slots];
    }

}

export abstract class BaseTower implements TowerBase {

    constructor(
        public id: number,
        public name: string,
        public level: number,
        public power: number,
        public type: TowerType
    ) { }

    public targets: Enemy[] = [];

    abstract calculateRange(): {

    };

    abstract attack(): {

    }

}

export class CannonTower extends BaseTower {

    constructor(id: number, name: string, level: number, power: number) {
        super(id, name, level, power, TowerType.Cannon);
    }

    public calculateRange(): number {
        return (this.level * 3) + (this.power * 2);
    };

   // @Upgraded - Decorator is commented out to avoid errors in the current context. Uncomment it if you want to apply the decorator.
    public attack(): number {
        return this.power * 3;
    }

}


export class MagicTower extends BaseTower {
    spellPower: any;

    constructor(id: number, name: string, level: number, spellPower: number) {
        super(id, name, level, spellPower, TowerType.Magic);
    }

    public calculateRange(): number {
        return (this.level * 5) + (this.power * 1);
    }

    public attack(): number {
        return this.power * 4;
    }


}


export class IceTower extends BaseTower {
    freeze: any;

    constructor(id: number, name: string, level: number, freeze: number) {
        super(id, name, level, freeze, TowerType.Ice);
    }

    public calculateRange(): number {
        return (this.level * 4) + (this.power * 3);
    }

    public attack(): number {
        return this.power * 2;
    }

}