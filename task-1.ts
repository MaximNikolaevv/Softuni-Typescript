function SumOrEven(number: number): boolean {

    const isEven = number % 2 === 0;
    return isEven;

}

console.log(SumOrEven(4));

// node out/task-1.js 




// ## Какво е `npm run build`?

// `npm run build` е команда, която казва на npm да изпълни скрипта `build` от package.json.

// В твоя проект това е:

// - `"build": "tsc"`

// Тоест при `npm run build` се пуска TypeScript компилаторът (`tsc`), който:

// - взима `.ts` файловете
// - компилира ги до `.js`
// - записва ги в out (според tsconfig.json)

// Накратко: **`build` = „направи готов JavaScript от TypeScript кода“**.