import { EmployeeRole } from "./modelss";
export class CompanyStorage {
    records = []; //T[] → масив от елементи T - = [] → започва като празен масив.
    add(item) {
        this.records.push(item);
    }
    remove(id) {
        let itemIndex = this.records.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            this.records.splice(itemIndex, 1);
        }
    }
    getAll() {
        return this.records;
    }
}
export class BaseEmployee {
    id;
    name;
    yearsExperience;
    role;
    tools = [];
    constructor(id, name, yearsExperience, role) {
        this.id = id;
        this.name = name;
        this.yearsExperience = yearsExperience;
        this.role = role;
    }
}
export class Developer extends BaseEmployee {
    programmingSkill;
    constructor(id, name, yearsExperience, programmingSkill) {
        super(id, name, yearsExperience, EmployeeRole.Developer);
        this.programmingSkill = programmingSkill;
    }
    calculateSalary() {
        return (this.yearsExperience * 1500) + (this.programmingSkill * 500);
    }
    //@Productive
    work() {
        return this.programmingSkill * 20;
    }
}
export class Designer extends BaseEmployee {
    creativity;
    constructor(id, name, yearsExperience, creativity) {
        super(id, name, yearsExperience, EmployeeRole.Designer);
        this.creativity = creativity;
    }
    calculateSalary() {
        return (this.yearsExperience * 1700) + (this.creativity * 600);
    }
    work() {
        return this.creativity * 15;
    }
}
export class Manager extends BaseEmployee {
    leadership;
    constructor(id, name, yearsExperience, leadership) {
        super(id, name, yearsExperience, EmployeeRole.Manager);
        this.leadership = leadership;
    }
    calculateSalary() {
        return (this.yearsExperience * 1700) + (this.leadership * 600);
    }
    work() {
        return this.leadership * 15;
    }
}
//# sourceMappingURL=employee-types.js.map