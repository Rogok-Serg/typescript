//  Завдання 1
// Є наступний JavaScript код:
let age = 2500;
console.log("age: ", age);
let user = "Max";
console.log("user: ", user);
let toggle = true;
console.log("toggle: ", toggle);
let empty = null;
console.log("empty: ", empty);
let notInitialize;
notInitialize = true;
console.log("notInitialize: ", notInitialize);
let callback = (a) => {
    return 100 + a;
};
console.log("callback: ", callback(11));
// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.
//  Завдання 2
// JavaScript змінна може зберігати значення будь-якого типу:
let anything = -20;
anything = "Text";
anything = {};
console.log("anything: ", anything);
// Який тип ви надаєте змінній anything в TypeScript, щоб зберегти її гнучкість?
// Завдання 3
// У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну безпосередньо інший змінної, якщо ми впевнені у її типі. У вас є наступний код:
let some;
some = 90;
let str;
str = some;
console.log("str: ", str);
// Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?
// Завдання 4
// У вас є наступний JavaScript масив:
let person = ["Max", 21];
console.log("person: ", person);
// Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
// Завдання 5
// Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
let value;
value = 52;
console.log("value: ", value);
let action;
action = "enable";
action = "disable";
// Завдання 6
// У вас є такі функції JavaScript:
function showMessage(message) {
    console.log(message);
}
showMessage("Error");
function calc(num1, num2) {
    return num1 + num2;
}
console.log(calc(9, 16));
function customError() {
    throw new Error("Error");
}
// customError();
// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
// Завдання 7
// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
var WorkDay;
(function (WorkDay) {
    WorkDay["Mon"] = "Monday";
    WorkDay["Tues"] = "Tuesday";
    WorkDay["Wed"] = "Wednesday";
    WorkDay["Thur"] = "Thursday";
    WorkDay["Fri"] = "Friday";
    WorkDay["Sat"] = "Saturday";
    WorkDay["Sun"] = "Sunday";
})(WorkDay || (WorkDay = {}));
var Weekend;
(function (Weekend) {
})(Weekend || (Weekend = {}));
console.log("Weekend: ", WorkDay);
function isWeekend(week) {
    return true;
}
// Завдання 8
// Створіть тип "Gender", використовуючи union type, який може містити значення "male", "female". Створіть змінну myGender цього типу.
// Завдання 9
// У вас є два об'єкти:
// const page1 = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   }
// }
// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }
// Створіть новий тип даних, який підходить для цих двох об'єктів.
//# sourceMappingURL=hw_1.js.map