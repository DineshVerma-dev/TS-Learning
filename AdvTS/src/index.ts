interface User {
    name : string,
    readonly age : number,
   readonly email : string
}

function sumOfAge(user1 : User ,user2 : User){
    return user1.age + user2.age
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// function updateUser (updatedprops : UpdateProps){
   
// }

const a: number = 2;
const b:number = 3;
console.log(a+b);

const obj = {
    name : "dinesh",
    roll_no: 31,
}
obj.name = "hello"

console.log(obj);
