const homework = 'домашка к 76 уроку:';
const MyName = 'Alex';
const age = 31;
const sex = 'male';
const height = 182;
const bodyweight = 65;
console.log(homework);
console.log(MyName, age, sex, height, bodyweight);

// ---------------------

const homework2 = 'домашка к 79 уроку:'
console.log(homework2)

const age2 = 31;
if (age2 >= 18) {
  result = 'вы совершеннолетний'
  console.log(result)
} else {
  result = 'вам еще нет 18'
  console.log(result)
}

const age3 = 14
age3 >= 18 ? console.log('вы совершеннолетний') : console.log('тебе нет еще 18ти, алкоголь не продам!')

// ----------------------

const homework3 = 'домашка к 80 уроку первое задание:';
console.log(homework3);

for (let a = 2; a <= 12; a = a + 2) {
  console.log(a)
}

const homework4 = 'домашка к 80 уроку второе задание:';
console.log(homework4);

for (let b = 10; b >= 1; b = b - 1) {
  console.log(b)
}

const homework5 = 'домашка к 80 уроку третье задание:';
console.log(homework5);

let c = 0
while (c < 12) {
  c = c + 2
  console.log(c)
}

let d = 11
while (d > 1) {
  d = d - 1
  console.log(d)
}

// ---------------------

const homework6 = 'домашка к 81 уроку первое задание:';
console.log(homework6);

const go = [1, 55, 32, 77, 99, 28];
for (let ch of go) {
  if (ch % 2 == 0) {
    console.log(ch);
  }
}

const homework7 = 'домашка к 81 уроку второе задание:';
console.log(homework7);

let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for (let x = rainbow.length - 1; x >= 0; x--) {
  console.log(rainbow[x])
}

const homework9 = 'домашка к 82 уроку первое задание:';
console.log(homework9);

let name = 'Alex';
function greeting(name) {
  return 'Hello ' + name + ' !'
}
console.log(greeting(name))

const homework10 = 'домашка к 82 уроку второе задание:';
console.log(homework10);

const arrayOfNumbers = [1, 15, 9, 38, 54, 3, 75, 7]
function logMoreThanTen(numbers) {
  for (let t = 0; t < numbers.length; t++) {
    if (numbers[t] > 10) {
      console.log(numbers[t])
    }
  }
}
logMoreThanTen(arrayOfNumbers)

const homework11 = 'домашка к 82 уроку третье задание:';
console.log(homework11);

function calculator(figureOne, figureTwo, action) {
  if (action == 'minus') {
    return figureOne - figureTwo
  } else if (action == 'plus') {
    return figureOne + figureTwo
  } else if (action == 'multiply') {
    return figureOne * figureTwo
  } else if (action == 'share') {
    return figureOne / figureTwo
  }
}

const result3 = calculator(10, 2, 'share')
console.log(result3)

const homework12 = 'домашка к 83 уроку первое задание:';
console.log(homework12);

const Alexei = {
  myAge: 31,
  myPlaceOfBirth: 'Moscow',
  mySex: 'male',
  myHeight: 182
}
console.log(Alexei)

const homework13 = 'домашка к 83 уроку второе задание:';
console.log(homework13);

const dog = {
  age: 10,
  callDog(name) {
    console.log(`Aport ${name}`)
  }
}
dog.callDog('Bobik!')

const homework14 = 'домашка к 83 уроку третье задание:';
console.log(homework14);

const users3 = [
  {
    name: 'Anton',
    age: 25,
    isAdmin: false,
  },
  {
    name: 'Kolya',
    age: 30,
    isAdmin: false,
  },
  {
    name: 'Polina',
    age: 22,
    isAdmin: true,
  },
  {
    name: 'Lera',
    age: 34,
    isAdmin: false,
  }
]
let numberOfUsers = 0
for (let f = 0; f < users3.length; f++) {
  if (users3[f].isAdmin != true) {
    numberOfUsers = numberOfUsers + 1;
  }
}
console.log(numberOfUsers)
