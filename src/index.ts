// const x: number = 10;

// console.log(x);

//problem 1

function myName(firstName:string) {
    return "Hello " + firstName;
}

const name1 = myName("Sushil")
console.log(name1);




//problem 2

const a:number = 10;
const b:number = 20;

function addNumbers(num1:number, num2:number):number{
    return num1 + num2;   
}

let result = addNumbers(a,b);
console.log(result);


// problem 3

function isVote(age:number){
    if (age<18) {
        return false;
        console.log("You are not eligible to vote.")
        
    }else {
        return true;
        console.log("You are eligible to vote.");
    }
}

isVote(20);

// problem4

function runAfter5Sec(fu: ()=>void){
    setTimeout(()=>{ fu(); }, 5000)
}

runAfter5Sec(function(){
    console.log("hanje 5 sec ho gye" )
})






// Inerface !!!

// QUESTION 1 Bacic problem

interface User {
    FirstName:string,
    LastName: string,
    age:number,
    email? :string
}

function isLegal(user: User){
    if (user.age>18) {
        return true;
    }else{
        return false;
    }
}

// Question 2 implementing interface
interface person {
    name :string,
    age:number,
    country?:string,
    email?:string
}

class employe implements person{
    name:string
    age: number


    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}


// types

type person2 = {
    name:string;
    age:number;
    department:string
}

type Employee ={
    name:string;
    age :number;
    email:string
}

type Person = person2 | Employee;

function mycollege(Person:Person){
    console.log("Hello " + Person);
  
    
}

mycollege({name:"Sushil", age :20, department:"EXTC"})