# Live TypeScript Setup

This project demonstrates how to set up and run TypeScript in live watch mode using `tsc --watch`.

## Project Structure

```txt
02_liveWithTS/
│
├── app.ts
├── app.js
├── index.html
├── tsconfig.json
└── .gitignore
```

## Step 1: Initialize TypeScript

Create a TypeScript configuration file:

```bash
npx tsc --init
```

This creates:

```txt
tsconfig.json
```

---

## Step 2: Configure tsconfig.json

Update your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "strict": true
  },

  "include": ["**/*.ts"],
  "exclude": ["node_modules", "*.html"]
}
```

---

## Step 3: Create TypeScript File

Create `app.ts`

```ts
let StudentName: string = "Sujit Tomar";
let StudentAge: number = 25;
let isStudent: boolean = true;

const hobbies: string[] = [
    "Reading",
    "Traveling",
    "Cooking"
];

console.log(`Student Name: ${StudentName}`);
console.log(`Student Age: ${StudentAge}`);
console.log(`Is Student: ${isStudent}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
```

---

## Step 4: Enable Live Compilation

Run:

```bash
npx tsc -w
```

or

```bash
npx tsc --watch
```

TypeScript will automatically watch files and recompile on save.

Example output:

```txt
[8:30:00 AM] Starting compilation in watch mode...

Found 0 errors. Watching for file changes.
```

---

## Step 5: Create HTML File

Create `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live with TypeScript</title>
</head>

<body>

    <h1>Live with TypeScript</h1>

    <script type="module" src="./app.js"></script>

</body>
</html>
```

---

## Run Project

Open `index.html` with Live Server.

Browser Console Output:

```txt
Student Name: Sujit Tomar
Student Age: 25
Is Student: true
Hobbies: Reading, Traveling, Cooking
```

---

## Useful Commands

Compile once:

```bash
npx tsc
```

Watch mode:

```bash
npx tsc -w
```

Initialize TypeScript:

```bash
npx tsc --init
```

---

## .gitignore

```gitignore
*.js
*.js.map
*.d.ts
*.d.ts.map

node_modules/
dist/
.vscode/
```