function add(para1: number, para2 = 10, isCalculate = false) {
  const sum = para1 + para2;
  console.log("hello12 update", sum, isCalculate);
}

add(5);

interface IFamily {
  fatherName: string;
  motherName: string;
}

interface IStudent {
  name: string;
  rollnumber: number;
  class: string;
  subject: string[];
  family: IFamily;
}

const student: IStudent = {
  name: "anuj",
  rollnumber: 7,
  class: "10th",
  subject: ["sub1", "sub2"],
  family: {
    fatherName: "shyam",
    motherName: "sunita",
  },
};

console.log(student.family.fatherName);
console.log(student.subject);

let arr: number[];
arr = [1, 2];

// tuple
let arrr: [string, number, string];
arrr = ["sss", 12, "anuj"];

// number, string, boolean, interface object, function
