import { Employee, EmployeeRole, WithId, Tool } from "./modelss";


export class CompanyStorage<T extends WithId> {

    private records: T[] = []; //T[] → масив от елементи T - = [] → започва като празен масив.

    add(item: T): void {

        this.records.push(item);

    }


    remove(id: number): void | undefined {

        let itemIndex = this.records.findIndex(item => item.id === id);

        if (itemIndex !== -1) {
            this.records.splice(itemIndex, 1);
        }
    }


    getAll(): T[] {
        return this.records;
    }

}

export abstract class BaseEmployee implements Employee {

    public tools: Tool[] = [];

    constructor(
        public id: number,
        public name: string,
        public yearsExperience: number,
        public role: EmployeeRole
    ) { }



    abstract calculateSalary(): number;

    abstract work(): number;



}

export class Developer extends BaseEmployee {

    constructor(
        id: number,
        name: string,
        yearsExperience: number,
        public programmingSkill: number
    ) {

        super(id, name, yearsExperience, EmployeeRole.Developer);
    }

    calculateSalary(): number {
        return (this.yearsExperience * 1500) + (this.programmingSkill * 500);
    }

    //@Productive
    work(): number {
        return this.programmingSkill * 20;
    }

}


export class Designer extends BaseEmployee {

    constructor(
        id: number,
        name: string,
        yearsExperience: number,
        public creativity: number
    ) {
        super(id, name, yearsExperience, EmployeeRole.Designer);
    }


    calculateSalary(): number {
        return (this.yearsExperience * 1700) + (this.creativity * 600);
    }

    work(): number {
        return this.creativity * 15;
    }

}


export class Manager extends BaseEmployee {

    constructor(
        id: number,
        name: string,
        yearsExperience: number,
        public leadership: number
    ) {
        super(id, name, yearsExperience, EmployeeRole.Manager);
    }

    calculateSalary(): number {
        return (this.yearsExperience * 1700) + (this.leadership * 600);
    }

    work(): number {
        return this.leadership * 15;
    }


}


