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