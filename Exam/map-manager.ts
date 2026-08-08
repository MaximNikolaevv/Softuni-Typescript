import { BuildQueue, BaseTower, CannonTower, MagicTower, IceTower } from '../Exam/tower-types';
import { WithId, TowerBase, TowerType, Enemy } from '../Exam/models';

export class MapManager {

    private towers: BaseTower[] = [];

    private buildQueue: BuildQueue<Enemy> = new BuildQueue<Enemy>();


    public placeTower(tower: BaseTower): string {
        this.towers.push(tower);
        return `Tower "${tower.name}" (ID: ${tower.id}) placed on the map.`;
    };

    public addEnemyToQueue(enemy: Enemy): string {
        this.buildQueue.enqueue(enemy);
        return `Enemy "${enemy.name}" (ID: ${enemy.id}) added to the wave queue.`;
    };

    public assignTarget(towerId: number, enemyId: number): string {
        const tower = this.towers.find(t => t.id === towerId);
        if (!tower) {
            throw new Error(`Tower with ID ${towerId} not found.`);
        }

        const enemy = this.buildQueue.dequeue(enemyId);

        if (!enemy) {
            throw new Error(`Enemy with ID ${enemyId} not found in the queue.`);
        }

        tower.targets.push(enemy);
        return `Enemy "${enemy.name}" assigned to tower "${tower.name}".`;
    }

    public listAllTowers(): string[] {

        let result: string[] = [];

        result.push("--- Map Defense Status ---");

        let SpecificDetail = function (tower: BaseTower) {
            if (tower instanceof CannonTower) {
                return `Power: ${tower.power}`;
            }
            if (tower instanceof MagicTower) {
                return `Power: ${tower.spellPower}`;
            }
            if (tower instanceof IceTower) {
                return `Power: ${tower.freeze}`;
            }

        };

        for (const tower of this.towers) {

            result.push(`[${tower.type}] ${tower.name} (Level: ${tower.level}, ${SpecificDetail(tower)}) - Range: ${tower.calculateRange()}`);

        }



        return result;

    }

}