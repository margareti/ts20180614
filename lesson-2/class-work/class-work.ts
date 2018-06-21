// function getAverage(a: number, b: number, c: number = 0): string {
//     let total = a + b + c;
//     let average = total / 3;
//     return `The average is ${average}`;
// }
//
// getAverage(1, 2, 2);

// function isString(str: number | string): str is string {
//     return typeof str === 'string';
// }
//
// function getAverage(a: string, b: string, c: number): number;
// function getAverage(a: number, b: string): string;
// function getAverage(a: number | string, b: string, c?: number): string | number {
//
//     let total = 0;
//     if (isString(a)) {
//         total += parseInt(a);
//
//     } else {
//
//     }
//
//     a;
//
// }
//
//
// const {a: b}: { a: number } = {a: 1};


// function f(this: void, a: number) {
//
// }
//
//
// interface IElement {
//     clickListener(cb: (this: void, e: Event) => void): void;
// }
//
// class Handler {
//     info: string;
//
//     badClick(this: Handler, e: Event) {
//         this.info = ' hi';
//     }
// }
//
// const h:Handler = new Handler();
// const el: IElement = {
//     clickListener(cb: (this: void, e: Event) => void): void {
//
//     }
// }
// el.clickListener(h.badClick)

// interface IInfo {
//     info: {},
// }
//
// interface User extends IInfo {
//     salary: {}
// }
// type Info = {}
// interface IInfo {
//     info: Info,
// }

//
// class Point {
//      public x!: number;
//      y!: number;
//      z!: number;
//
//     public constructor() {
//     }
//
//     sum(): number {
//         return this.x + this.y;
//     }
// }


// class Singlton {
//     private static contex: Singlton;
//
//     private constructor() {
//     }
//
//     static getInstance(){
//         if(!Singlton.contex) {
//             Singlton.contex = new Singlton();
//         }
//         return Singlton.contex;
//     }
// }
//
// const a =  Singlton.getInstance();

// abstract class Account {
//     firstName!: string;
//     surname!: string;
//
//     abstract getFullName(): string;
//
//     getSalary() {
//         return 123;
//     }
//
//     public set setPoint (a:any){
//
//     }
// }
//
// class A extends Account {
//     firstName!: string;
//     surname!: string;
//
//     getFullName(): string {
//         return 'asd';
//     }
//
// }

const a = new A();