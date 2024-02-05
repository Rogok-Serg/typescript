// Generic

// Мета цього завдання - допомогти вам зрозуміти та застосувати generics у TypeScript. Ви працюватимете з функціями,
// що повертають проміси, використовувати вбудований тип Pick, об'єднувати об'єкти за допомогою generics, а також
// вирішувати проблеми типів у класах.

// ### Завдання 1

// Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. Доповніть цю функцію,
//  використовуючи generics, щоб вона повертала правильний тип.

function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50, 30]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

// ### Завдання 2

// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
// Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType. Функція compare
// повинна повертати AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type AllTypeSummaryTop1 = Pick<AllType, "name" | "color">;

type AllTypeSummaryBottom = Pick<AllType, "position" | "weight">;

const top1 = {
  name: "topBorder",
  color: "red",
  position: 25,
  weight: 16,
};

const bottom = {
  name: "bottomBorder",
  color: "green",
  position: 30,
  weight: 20,
};

function compare(
  top1: AllTypeSummaryTop1,
  bottom: AllTypeSummaryBottom
): AllType {
  return {
    name: top1.name,
    color: top1.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
console.log(compare(top1, bottom));
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
// Однак вам не завжди потрібно заповнити всі поля.Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши
// ім'я та прізвище без змін.

// Виправте тип у аргументі функції так, щоб не було помилок типу.

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(user: User, initialValues: Partial<User>) {
  return { ...user, ...initialValues };
}

const user1 = {
  name: "Bob",
  surname: "Walt",
  email: "bobwalt@Gmail.com",
  password: "bob-0107",
};

console.log("user1: ", user1);
console.log(
  createOrUpdateUser(user1, { email: "user@mail.com", password: "password123" })
);
// ### Завдання 7

// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription,
//  який зіставлятиме кожну роль користувача з її описом.

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type UserRoleDiscription = Record<string, string>;

const RoleDescription: UserRoleDiscription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

console.log("RoleDescription: ", RoleDescription);

// ### Завдання 8

// У вас є тип Form, який містить інформацію про форму, включаючи поле errors. Ви хочете створити новий тип Params, який включає всі поля з Form,
//  крім errors.

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

const userForm: Params = {
  firstName: "Bob",
  lastName: "Walt",
  email: "bob@test.org",
  phone: "+38(093)33-44-555",
};
console.log("userForm: ", userForm);
