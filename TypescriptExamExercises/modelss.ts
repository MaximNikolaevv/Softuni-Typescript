export enum EmployeeRole {

    Developer = "DEVELOPER",
    Designer = "DESIGNER",
    Manager = "MANAGER"

}


export interface WithId {

    id: number

}

export interface Employee extends WithId {

    name: string;
    yearsExperience: number;
    role: EmployeeRole;

}

export interface Tool extends WithId {

    name: string;
    price: number;

} 