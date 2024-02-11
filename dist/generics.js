// Generic
// Мета цього завдання - допомогти вам зрозуміти та застосувати generics у TypeScript. Ви працюватимете з функціями,
// що повертають проміси, використовувати вбудований тип Pick, об'єднувати об'єкти за допомогою generics, а також
// вирішувати проблеми типів у класах.
// ### Завдання 1
// Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. Доповніть цю функцію,
//  використовуючи generics, щоб вона повертала правильний тип.
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50, 30]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
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
function compare(top1, bottom) {
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const obj1 = {
    firstname: "John",
};
const obj2 = {
    lastname: "Wall-i",
};
console.log(merge(obj1, obj2));
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const value = {
    key: "ключ",
    value: 23,
};
console.log("value: ", value);
function createOrUpdateUser(user, initialValues) {
    return { ...user, ...initialValues };
}
const user1 = {
    name: "Bob",
    surname: "Walt",
    email: "bobwalt@Gmail.com",
    password: "bob-0107",
};
console.log("user1: ", user1);
console.log(createOrUpdateUser(user1, { email: "user@mail.com", password: "password123" }));
// ### Завдання 7
// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription,
//  який зіставлятиме кожну роль користувача з її описом.
export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
const RoleDescription = {
    admin: "Admin User",
    editor: "Editor User",
    guest: "Guest User",
};
console.log("RoleDescription: ", RoleDescription);
const userForm = {
    firstName: "Bob",
    lastName: "Walt",
    email: "bob@test.org",
    phone: "+38(093)33-44-555",
};
console.log("userForm: ", userForm);
//# sourceMappingURL=generics.js.map