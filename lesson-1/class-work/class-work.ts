// interface IAccount {
//     name: string;
//     age: number;
// }

// const person = IAccount;

// const account = {
//     name: 'Igor',
//     age: 32,
// };

// const person: typeof account = {
//     name: 'Igor',
//     age: 32,
// };

// class Account {
//     firstName: string;
//     age: number;
// }


// let person1: Account;

// let v: void = undefined;
// let d: number  = null;

// const a: {
//     readonly name: string,
//     readonly  age?: number
// } = {
//     name: 's',
//     age: 1
// };

// let b: number[] = [1, 2, 3];
// let c: Array<number> = [1, 2, 3];
//
// b.push(1);
// b[100] = 23;

// let c: [number, string, boolean] = [1, 's', true];

// let cb1: { new (a: string): number };

// type cb = (a: string) => number;
//
// let cb2: cb;
// let cb3: cb;
// let cb4: cb;
// let cb5: cb;
//
// interface IName {
//     name: string;
// }
//
// interface IAge {
//     age: number;
// }
//
// interface IMyAccount extends IName, IAge {
//
// }
//
// class A implements IMyAccount {
//     name!: string;
//     lastName!: string;
//     age!: number;
// }
//
//
// interface IName {
//     lastName: string;
// }

type User = { name: string, age: number };
type Admin = { name: string, age: number , salary: number};

interface IAccount<INFO extends User> {
    _id: string;
    info: INFO;
}
//
const my_information1 = { name: 'Igor', age: 32 };
const my_information2 = { name: 'Igor', age: 32, salary: 3000 };

let user: IAccount<User> = {
    _id: 'asdasdasda12341234',
    info: my_information1
};

let admin: IAccount<Admin> = {
    _id: 'asdasdasda12341234',
    info: my_information2
};


