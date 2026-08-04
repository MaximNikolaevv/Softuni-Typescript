export enum MonsterType {

    Dragon = "DRAGON",
    Knight = "KNIGHT",
    Wizard = "WIZARD"

};

export interface WithId {
    id: number
};

export interface Monster extends WithId {

    name: string
    level: number
    type: MonsterType

};

export interface Item extends WithId {
    name: string
    price: number

};