/* ассоциативный тип */
/* type User  = {
  id: number,
  username: string,
  name: string
} */

// Создаем объект `user`, соответствующий ассоциативному типу
/* const user1: User = {
  id: 1,
  username: "Superman",
  name: "Clark Kent"
}

const user2: User = {
  id: 2,
  username: 'WonderWoman',
  name: 'Diana Prince',
}

const user3: User = {
 id: 3,
 username: 'Spiderman',
 name: 'Peter Parker',
} */

// Создаем вектор пользователей
/* const userVector: User[] = [user1, user2, user3] */

// Создаем кортеж
/* const userTuple: [User, number] = [user1 , 10] */
/* 
type User = {
  id: number,
  username: string,
  name: string,
  email: string,
 }

 async function fetchFromEmail(email: string) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const parsed: User[] = await res.json();
  const user = parsed.find((u: User) => u.email === email)

  if(user) {
    return fetchFromId(user.id);
  }
  return undefined;
 }

function fetchFromId(id: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((user) => user.address)
}

function getUserAddress(user: User | string) {
  if (typeof user === 'string') {
    return fetchFromEmail(user)
  }
  return fetchFromId(user.id)
 }

 getUserAddress('Rey.Padberg@karina.biz').then(console.log).catch(console.error) */

 const n: number = 1;
 const s: string = "string1";
 const bool: boolean = true;
 const nu: null = null;
 const u: undefined = undefined;


 //tuple

let x: [string, number] = ["hello", 100];
let x1: [string, number] = ["goodbye", 11];

//any 

let ar: Array<any> = ["stg","str2", 2];

enum Derictions {
  Top,
  Left
}

// function 

const createPassword = (name: string = "Peter", age?: number | string) => `${name}${age}`;
console.log(createPassword(`Jack`, 31))
console.log(createPassword(`Max`, `25`))
console.log(createPassword())


const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skills are ${skills.join("")}`
createSkills("MAx", `Js`,`St`,"CSS")

//void
const sayHi = ():void => {
  console.log(`Hello`)
}

sayHi()

//never

const msg = `Hello, i am Error`;
const err = (msg: string):never => {
  throw new Error(msg);
}

const infiniteLoop = (): never => {
  while (true) {

  }
}

let myFunc: (firstArg: string) => void;
 
function oldFunc(name: string):void  {
   console.log(`Hello ${name} nice to meet you`);
}

myFunc = oldFunc;

myFunc("Mary");


/* Objects */

let user: any  = {
  name: "Lincoln",
  age: 27
}

user = "test";

let user1: {name: string, age: number ,nickName?: string} = {
  name: "Marry",
  age: 25,
  nickName : "good-girl"
} 

//user1 = "test"; error no correct type  
let admin: {name: string, age: number ,nickName?: string} = {
  name: "Garry",
  age: 22,
  nickName : "Orange"
}

// Don't Repeat YourSelf

type Person = {name: string, age: number, nickName?: string} // alias

const projectAdmin: Person = {
  name: "Peter",
  age: 30,
  nickName : "webDev"
}