// function logout() {
//    confirm('are you sure you want to leave this page')
// }
// console.log(10 / 5);
// alert('welcome to javascript')
// prompt('enter your name')
// confirm('Are you sure you want to make this payment?')



// variable decleration
// var
// let
// const

// let user = 'john'
// user = 'jane'
// console.log(user);

// const job = 'janitor'
// console.log(job);

// data types
// two data types
// 1. primitive data type
// 2. non primitive data type

// primitive data types:
//  number
// let age = 25
// console.log(age);

// string - always in quotes
// let colour = 'white'
// console.log(colour);

// boolean- has a value of either true or false
// let paid = false
// console.log(paid);

// null
// let address = null
// console.log(address);

// undefined
// let time;
// console.log(time);

// non primitive data types:
// Date data type

// let time;
// time = new Date().getFullYear()
// console.log(time);

// function date type
// function addnumbers(){
//     console.log(7 + 13);
// }

// addnumbers();

//  function addnumbers(a, b){
//      return a + b;
//  }
// addnumbers(7, 13);

// array data type
// arrays are variables that can be used to store huge or multiple kinds of data
//the length is the number of elements in the array and index is the position of the element
  //length     1     2     3      4       5
//  let colours =[1, 'john', null, true, addnumbers(5, 10)]
    //index    0    1      2      3      4
    // let colours =['black', 'white', 'red', 'violer', 'yellow']
//  console.log(colours.length);
// console.log(colours[3]); this is an index
//colours.pop() // the pop removes the last element of the array
//colours.shift()// the pop removes the first element of the array
// colours.push('blue')// adds an element to the end of the array
// colours.unshift('green') // adds an element to the beginning of the array
// console.log(colours);


// Object data type

// const person = {
//     age: 35,
//     name: 'john',
//     job: 'developer',
//     hobbies: ['reading', 'coding'],
//     children: ['jane', 'bill'],
//     married: true,
//     address: '17 dev road',
//     disable: null,
// }
    

// console.log(person);

//nested arrays

// const properties =[
//     'shoe',
//     cars = ['Toyota', 'Porshe', Benz=['GLE', 'AMG', 'GLK'], 'Lamborghini'],
//     company = ['saloon', 'tech-hub', factories=['sugar', 'cement', 'spaghetti', cereals =['fruits and fibres', 'golden morn', 'quaker oats']]],
//     'yatch',
//     houses= ['bungalow', 'duplex', 'penthouse', 'mini-flats']
// ]
// console.log(cereals[1])
// console.log(properties[0]);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 38,
    address: '123 Main St',
    married: false,
    siblings: null,
    jobDescription: {
        title: 'Software Engineer',
        company: 'Google',
        startDate: '2023-14-21',
        endDate: 'currently working there',
        level: {
            status: 'senior engineer',
            qualification: ['IBM', 'ISBQT', 'Google'],
            cridentials: 'Tier 1',
            role: 'Team lead'
        }
    }
}
console.log(person.jobDescription.level.qualification[2],person.jobDescription.level.cridentials)