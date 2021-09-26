// function add(para1: number, para2 = 10, isCalculate = false) {
//   const sum = para1 + para2;
//   console.log("hello12 update", sum, isCalculate);
// }

// add(5);

// interface IGenericOptions {
//   id: string;
//   className?: string;
// }

// const genObj: IGenericOptions = {
//   id: "123",
// };

// interface IFamily {
//   fatherName: string;
//   motherName: string;
// }

// interface IStudent extends Partial<IGenericOptions> {
//   name: string;
//   rollnumber: number;
//   class: string;
//   subject: string[];
//   family: IFamily;
// }

// const student: IStudent = {
//   name: "anuj",
//   rollnumber: 7,
//   class: "10th",
//   subject: ["sub1", "sub2"],
//   family: {
//     fatherName: "shyam",
//     motherName: "sunita",
//   },
// };

// console.log(student.family.fatherName);
// console.log(student.subject);

// let arr: number[];
// arr = [1, 2];

// // tuple
// let arrr: [string, number, string];
// arrr = ["sss", 12, "anuj"];

// // number, string, boolean, interface object, function

// const func = function (val1: number, val2?: number) {
//   return val1 + (val2 ? val2 : 0);
// };

// const func2 = function func2(val1: number) {
//   console.log("func", val1);
// };

// // let secondFun: string = "";
// // secondFun = func;

// let secondFun: (val1: number, val2?: number) => number;
// secondFun = func;

// console.log(secondFun(7, 6));

// interface IProps extends IGenericOptions {
//   onSubmit: (val: number) => string;
// }

// function hello(val: number) {
//   return `${val}`;
// }

// const props: IProps = {
//   id: "12",
//   onSubmit: hello,
// };

// const studentFun = ({ id, name, ...rest }: IStudent) => {
//   console.log(id, name, rest);
// };

// studentFun(student);

// Enum
// It is typescript feature (Added by typescript)
// It is used to define named constants.
// we can create string and numeric enum

// string enum
// const home = "Home";
// const about = "About";
// const contact = "Contact";
// const form = "Form";

// enum Tabs {
//   home = "House",
//   About = "About",
//   Contact = "Contact",
//   Form = "Form",
// }

// console.log(Tabs, Tabs.About);
// console.log(Tabs["About"]);

// const tab = "About";

// if (tab === Tabs.About) {
// }

// // numeric enum

// enum Role {
//   Admin = 2,
//   Student,
//   Teacher,
// }

// console.log(Role.Admin === 2);

// interface IObj {
//   role: Role;
//   name: string;
// }

// const val: IObj = {
//   role: Role.Teacher,
//   name: "aa",
// };

// console.log(val);

// Generic Types

// Important topic

// Flexible and re-usable code
// Generic helps to create resuable components that work with a number
// of types instead of a single type.
// It allows users to consume these components and use their own types.
// We try with promise and function
// Promise type - it will help to identify what type of data we get

// keyof constraint - IT takes an object type and produce a string or numberic
// literal union of its keys
// we will check with example

// interface IInfo {
//   name: string;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// console.log(identity<IInfo>({ name: "Anuj" }));

// interface IArg1 {
//   name: string;
// }

// interface IArg2 {
//   rollNumber: number;
// }

// function mergeObject<T, P>(arg1: T, arg2: P): T & P {
//   return Object.assign(arg1, arg2);
// }

// const obj = mergeObject<IArg1, IArg2>({ name: "anuj" }, { rollNumber: 10 });
// obj.rollNumber;

// const promise: Promise<IArg2> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ rollNumber: 10 });
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data.rollNumber);
// });

// keyof

// function valueFromObject<T extends object, U extends keyof T>(obj: T, key: U) {
//   obj[key];
// }
// valueFromObject({ name: "Anuj", rollNumber: 7, class: "10th" }, "class");

// Optional chaining (?.)

// it helps to access the value from the connected objects when it is
// possible a property or function may be undefined or null.

// (?.) -> student?.name?.firstname
// function call -> adventurer.someNonExistentMethod?.()
// arrary item -> arr?.[3];

const student = {
  rollNumber: 7,
  details: {
    firstName: "Anuj",
    lastName: "Singla",
  },
  parentDetails: {
    fatherName: "Shyam",
    motherName: "Sunita",
  },
};

// student && student.details && student.details.firstName;
student?.details?.firstName;

// Nullish coalescing

// It is a logical operator and returns right-hand side value if left-hand side
// value is null or undefined otherwise it will return left-hand side value.
// it is used when you want to add default value if actual value is null or undefined.

const value = null;
const data = value ?? "Default Value";
console.log(data);
