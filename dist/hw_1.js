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
// У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну
//  безпосередньо інший змінної, якщо ми впевнені у її типі.У вас є наступний код:
let some;
some = 90;
let str;
str = some;
console.log("str: ", str);
// Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?
// Завдання 4
// У вас є наступний JavaScript масив:
let person = ["Max", 21, 20, 13];
console.log("person: ", person);
// Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди
// буде рядком, а другий числом ?
// Завдання 5
// Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? І так само визначте змінну,
// яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable'(literal type) ?
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
console.log(calc(9, 30));
function customError() {
    throw new Error("Error");
}
// customError();
// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
// Завдання 7
// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення,
// що вказує, чи це день робочий чи вихідний.
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
function isWeekend(weekDay) {
    if (weekDay === WorkDay.Sat)
        return false;
    if (weekDay === WorkDay.Sun)
        return false;
    return true;
}
console.log(isWeekend(WorkDay.Sun));
const myGender = "female";
console.log("myGender: ", myGender);
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
console.log("page1: ", page1);
console.log("page2: ", page2);
// Створіть новий тип даних, який підходить для цих двох об'єктів.
// Generic
// Мета цього завдання - допомогти вам зрозуміти та застосувати generics у TypeScript. Ви працюватимете з функціями,
// що повертають проміси, використовувати вбудований тип Pick, об'єднувати об'єкти за допомогою generics, а також
// вирішувати проблеми типів у класах.
// ### Завдання 1
// Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. Доповніть цю функцію,
//  використовуючи generics, щоб вона повертала правильний тип.
// function getPromise() {
//   return new Promise((resolve) => {
//     resolve(["Text", 50, 30]);
//   });
// }
// getPromise().then((data) => {
//   console.log(data);
// });
// ### Завдання 2
// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
// Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType. Функція compare повинна повертати AllType.
// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };
// function compare(top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }
// ### Завдання 3
// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
// function merge(objA, objB) {
//   return Object.assign(objA, objB);
// }
// ### Завдання 4
// Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
// class Component {
//   constructor(public props: T) {}
// }
// class Page extends Component {
//   pageInfo() {
//     console.log(this.props.title);
//   }
// }
// ### Завдання 5
// Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. Використовуйте generics, щоб цей інтерфейс міг
// працювати з будь - якими типами ключів та значень.
// interface KeyValuePair {
//   key;
//   value;
// }
// ### Завдання 6
// Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю.
// Однак вам не завжди потрібно заповнити всі поля.Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.
// Виправте тип у аргументі функції так, щоб не було помилок типу.
// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };
// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }
// createOrUpdateUser({ email: "user@mail.com", password: "password123" });
// ### Завдання 7
// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription,
//  який зіставлятиме кожну роль користувача з її описом.
// export enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }
// // Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };
// ### Завдання 8
// У вас є тип Form, який містить інформацію про форму, включаючи поле errors. Ви хочете створити новий тип Params, який включає всі поля з Form,
//  крім errors.
// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };
// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };
// // Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
// type Params = Form;
//# sourceMappingURL=hw_1.js.map