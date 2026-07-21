"use strict";
function Days(number) {
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 1] = "Monday";
        Day[Day["Tuesday"] = 2] = "Tuesday";
        Day[Day["Wednesday"] = 3] = "Wednesday";
        Day[Day["Thursday"] = 4] = "Thursday";
        Day[Day["Friday"] = 5] = "Friday";
        Day[Day["Saturday"] = 6] = "Saturday";
        Day[Day["Sunday"] = 7] = "Sunday";
    })(Day || (Day = {}));
    let today = number;
    console.log(today);
}
Days(3);
//# sourceMappingURL=task-1-AdvancedTypes.js.map