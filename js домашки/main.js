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

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let y = 0; y < numbers5.length; y = y + 2) {
  console.log(numbers5[y] + 1)
}

const homework7 = 'домашка к 81 уроку второе задание:';
console.log(homework7);

let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for (let x = rainbow.length - 1; x >= 0; x--) {
  console.log(rainbow[x])
}
