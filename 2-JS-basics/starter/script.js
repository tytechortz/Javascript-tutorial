/**********************************
* Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var $3years = 3;
var johnMark = 'John and Mark';
*/
/************************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John'
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old' + job + '.  Is he married? ' + isMarried);
*/

// Variable mutation
/*
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '.  Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/***************************************************
*Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
var yearJohn = year - 28;
var yearMark = year - 33;
    
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*******************************************************
* Operator precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8* 4 - 6 // 32 -6 // 26
console.log(x, y);

// 2 + 4 + 5

// More operators
//x = x * 2;
x *= 2;
console.log(x);
x += 10; x
console.log(x);
//x = x + 1;
//x += 1;
x++;
x--;
*/

/***************************************************
* CODING CHALLENGE 1
*/

/*
var massMark = 200;
var hgtMark = 2;
var massJohn = 110;
var hgtJohn = 1.68;

bmiMark = massMark / (hgtMark * hgtMark);
bmiJohn = massJohn / (hgtJohn * hgtJohn);
console.log(bmiMark, bmiJohn);

var higherBMI = bmiMark > bmiJohn;

console.log("Is Mark's BMI greater than John's?  " + higherBMI);
*/

/****************************************************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully stay single! ');
}
    
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully stay single! ');
}

var massMark = 200;
var hgtMark = 2;
var massJohn = 110;
var hgtJohn = 1.68;

bmiMark = massMark / (hgtMark * hgtMark);
bmiJohn = massJohn / (hgtJohn * hgtJohn);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
    console.log('Marks\' BMI is higher than John\'s.');
    
} else {
    console.log('Johns\' BMI is higher than MArks\'s.');
}

//var higherBMI = bmiMark > bmiJohn;
//console.log("Is Mark's BMI greater than John's?  " + higherBMI);
*/

/*************************************************************
* Boolean logic
*/

var firstName = 'John'
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
     console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
