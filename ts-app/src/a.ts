const x : number = 10;
console.log(x);

function  greeting(name : string ,fullname : string ,age : number) {
 console.log(`hello ${name}  ${fullname} ${age}`);
}

greeting("dinesh" , "verma" ,19);

// type inference
const sum = (a:number ,b :number) : number => {
   return a+b;
}

console.log(sum(2,3));

function isLegal(age : number)  {
    return age  > 18 ? true : false;
}

console.log(isLegal(3));

function arg(fn : () => void) {
    setTimeout(fn,1000);

}

arg( function  () {
    console.log("Hey Iam printed here");
})

interface User {
    employeeName : string,
    emp_id : number,
    department  : string,
    phone_no ?:number,
    ismale ?: boolean,
}

function employee(user : User) {
    console.log(`Hello employee ${ user.employeeName} ${user.emp_id},${user.department} ${user.phone_no}`);
}

employee({
    employeeName: "pankaj",
    emp_id: 112,
    department: "CSE",
    
})

interface Person {
    name: string;
    age?: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age?: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("dinesh", 19);
console.log(e);
e.greet("Hello");

// /* interfaces can be implemented as classes types cannot be */

 ///type 
type User1 = {
	firstName: string;
	lastName: string;
	age: number
}

 ///unions
type stringornumber = string | number;

function printId(id: stringornumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

/// Intersection
type Employee2 = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee2 & Manager;
  
  const teamLead: TeamLead = {
    name: "developer",
    startDate: new Date(),
    department: "Software developer Enginner (SWE)"
  };
  console.log(teamLead)
  //if you want to create a class that implement the types  then you have to use interfces
  //in types you can do | or &