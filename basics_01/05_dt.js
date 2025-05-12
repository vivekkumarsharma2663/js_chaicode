//Primitive Data type

// 7 types: String , Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non-Primitive)

// Array ,Objects, Functions

// Javascript is a dynamically typed language

const id= Symbol('123');
const anotherid = Symbol('123');
console.log(id);
console.log(anotherid);
console.log(id==anotherid);

//************* STACK(Primitive) AND HEAP(Non-Primitive)//

let myname="Vivek";
let newname=myname;
console.log(myname);
newname+="kumar";
console.log(newname);
console.log(myname);

let userone={
    email:"vk07@gmail.com",
    upi:"user@ybl"
}

let usertwo=userone;
usertwo.email="xyz@gmail.com";
console.log(userone.email);