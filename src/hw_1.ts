//  Завдання 1
// Є наступний JavaScript код:

let age: number = 2500;
console.log("age: ", age);
let user: string = "Max";
console.log("user: ", user);
let toggle: boolean = true;
console.log("toggle: ", toggle);
let empty: null = null;
console.log("empty: ", empty);
let notInitialize: any;
notInitialize = true;
console.log("notInitialize: ", notInitialize);
let callback = (a: number): number => {
  return 100 + a;
};
console.log("callback: ", callback(11));

// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

//  Завдання 2
// JavaScript змінна може зберігати значення будь-якого типу:

let anything: any = -20;
anything = "Text";
anything = {};
console.log("anything: ", anything);

// Який тип ви надаєте змінній anything в TypeScript, щоб зберегти її гнучкість?

// Завдання 3
// У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну
//  безпосередньо інший змінної, якщо ми впевнені у її типі.У вас є наступний код:

let some: unknown;
some = 90;
let str: unknown;
str = some;
console.log("str: ", str);

// Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?

// Завдання 4
// У вас є наступний JavaScript масив:

let person: [string, ...number[]] = ["Max", 21, 20, 13];
console.log("person: ", person);

// Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди
// буде рядком, а другий числом ?

// Завдання 5
// Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? І так само визначте змінну,
// яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable'(literal type) ?

let value: string | number;
value = 52;
console.log("value: ", value);

type EnableOrDisable = "enable" | "disable";

let action: EnableOrDisable;
action = "enable";
action = "disable";

// Завдання 6
// У вас є такі функції JavaScript:

function showMessage(message: string): void {
  console.log(message);
}
showMessage("Error");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(calc(9, 30));

function customError(): never {
  throw new Error("Error");
}
// customError();
// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

// Завдання 7
// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення,
// що вказує, чи це день робочий чи вихідний.

enum WorkDay {
  Mon = "Monday",
  Tues = "Tuesday",
  Wed = "Wednesday",
  Thur = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday",
}

function isWeekend(weekDay: WorkDay): boolean {
  if (weekDay === WorkDay.Sat) return false;
  if (weekDay === WorkDay.Sun) return false;
  return true;
}
console.log(isWeekend(WorkDay.Sun));

// Завдання 8
// Створіть тип "Gender", використовуючи union type, який може містити значення "male", "female".
//  Створіть змінну myGender цього типу.

type Gender = "male" | "female";

const myGender: Gender = "female";
console.log("myGender: ", myGender);

// Завдання 9
// У вас є два об'єкти:

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {};
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

console.log("page1: ", page1);
console.log("page2: ", page2);

// Створіть новий тип даних, який підходить для цих двох об'єктів.
