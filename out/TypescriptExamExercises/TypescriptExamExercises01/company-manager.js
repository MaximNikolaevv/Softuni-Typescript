import { CompanyStorage, Developer, Designer, Manager } from "./employee-types";
class CompanyManager {
    employees = [];
    storage = new CompanyStorage();
    addEmployee(employee) {
        this.employees.push(employee);
        return `Employee "${employee.name}" (ID: ${employee.id}) joined the company.`;
    }
    ;
    addTool(tool) {
        this.storage.add(tool);
        return `Tool "${tool.name}" (ID: ${tool.id}) added to the company.`;
    }
    ;
    assignTool(employeeId, toolId) {
        const employee = this.employees.find(emp => emp.id === employeeId);
        if (!employee) {
            return `ERROR: Employee with ID ${employeeId} not found.`;
        }
        ;
        const tool = this.storage.getAll().find(t => t.id === toolId);
        if (employee.tools.find(tool => tool.id === toolId)) {
            return `Tool with ID ${toolId} is already assigned to employee "${employee.name}".`;
        }
        ;
        return `Tool ${tool?.name} assigned to "${employee.name}".`;
    }
    listEmployees() {
        const result = [];
        result.push("--- Company Employees ---");
        for (const employee of this.employees) {
            let detail = "";
            if (employee instanceof Developer) {
                detail = `Programming Skill: ${employee.programmingSkill}`;
            }
            else if (employee instanceof Designer) {
                detail = `Creativity: ${employee.creativity}`;
            }
            else if (employee instanceof Manager) {
                detail = `Leadership: ${employee.leadership}`;
            }
            result.push(`[${employee.role}] ${employee.name} (Experience: ${employee.yearsExperience}, ${detail}) - Salary: ${employee.calculateSalary()}`);
        }
        result.push("-------------------------");
        return result;
    }
}
const company = new CompanyManager();
console.log(company.addEmployee(new Developer(1, "Max", 3, 9)));
console.log(company.addEmployee(new Designer(2, "Anna", 5, 8)));
console.log(company.addEmployee(new Manager(3, "Ivan", 10, 7)));
console.log(company.addTool({
    id: 101,
    name: "MacBook Pro",
    price: 3500
}));
console.log(company.addTool({
    id: 102,
    name: "Adobe License",
    price: 800
}));
console.log(company.addTool({
    id: 103,
    name: "Mechanical Keyboard",
    price: 180
}));
//# sourceMappingURL=company-manager.js.map