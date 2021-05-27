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
var n = 1;
var s = "string1";
var bool = true;
var nu = null;
var u = undefined;
//tuple
var x = ["hello", 100];
var x1 = ["goodbye", 11];
//any 
var ar = ["stg", "str2", 2];
var Derictions;
(function (Derictions) {
    Derictions[Derictions["Top"] = 0] = "Top";
    Derictions[Derictions["Left"] = 1] = "Left";
})(Derictions || (Derictions = {}));
// function 
var createPassword = function (name, age) {
    if (name === void 0) { name = "Peter"; }
    return "" + name + age;
};
console.log(createPassword("Jack", 31));
console.log(createPassword("Max", "25"));
console.log(createPassword());
var createSkills = function (name) {
    var skills = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skills[_i - 1] = arguments[_i];
    }
    return name + ", my skills are " + skills.join("");
};
createSkills("MAx", "Js", "St", "CSS");
//void
var sayHi = function () {
    console.log("Hello");
};
sayHi();
//never
var msg = "Hello, i am Error";
var err = function (msg) {
    throw new Error(msg);
};
var infiniteLoop = function () {
    while (true) {
    }
};
var myFunc;
function oldFunc(name) {
    console.log("Hello " + name + " nice to meet you");
}
myFunc = oldFunc;
myFunc("Mary");
/* Objects */
var user = {
    name: "Lincoln",
    age: 27
};
user = "test";
var user1 = {
    name: "Marry",
    age: 25,
    nickName: "good-girl"
};
//user1 = "test"; error no correct type  
var admin = {
    name: "Garry",
    age: 22,
    nickName: "Orange"
};
var projectAdmin = {
    name: "Peter",
    age: 30,
    nickName: "webDev"
};
