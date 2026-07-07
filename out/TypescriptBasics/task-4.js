"use strict";
function SummarizePerson(id, firstName, lastName, age, middleName, hobbies, workinfo) {
    const PersonInfo = [id];
    if (middleName) {
        PersonInfo.push([firstName, middleName, lastName].join(' '));
    }
    else {
        PersonInfo.push([firstName, lastName].join(' '));
    }
    PersonInfo.push(age);
    if (hobbies) {
        PersonInfo.push(...hobbies);
    }
    else {
        PersonInfo.push('-');
    }
    if (hobbies && hobbies.length > 1) {
        hobbies.forEach((hobby, index) => {
            if (index === hobbies.length - 1) {
                PersonInfo.push(hobby);
            }
            else {
                PersonInfo.push(hobby + ',');
            }
        });
    }
    if (workinfo) {
        PersonInfo.push(`${workinfo[0]} -> ${workinfo[1]}`);
    }
    else {
        PersonInfo.push('-');
    }
    console.log(PersonInfo);
}
SummarizePerson(21, 'Joseph', 'Angler', 28);
//# sourceMappingURL=task-4.js.map