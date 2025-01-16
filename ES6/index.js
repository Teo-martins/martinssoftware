// JavaScript (ES5)

// function multiply(){
//     return 2 * 3; 
// };

// // ES6

// const multiply = () => { 
//     return 2 * 3 
// };
// multiply()





// let sayHello = () => console.log(Pepper);

// // let sayBye = () => alert`Bye`;

// let doSomething = (firstName, surname) => {
// firstName(), console.log(surname);
// };

// doSomething(sayHello, 'Mary'); // “Hello” will be alerted

// doSomething(sayBye); // “Bye” will be alerted





// const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Mary' }]

// JavaScript

// function findPerson(firstName) {

//  for (let i = 0; i < people.length; i++) {

//    let person = people[i]
//    if (person.name == firstName) {
//      console.log(person.name);
//    }
//  }

// }
// findPerson('Mary')

// ES6

// function findPerson(name) {

//  return people.find(person =>person.name == name)

// }
// console.log(findPerson('Mary'));
 



// ForEach
// 

// function showEachOne() {

//     for (let i = 0; i < people.length; i++) {
//       console.log(people[i].name);
//     }
   // if you want it to stop at a certain number you change the product. length to the number you want
//    }
// showEachOne()
   
   
   // ES6
   
// const showEachOne = () => people.forEach(person => console.log(person.name));
   



// const products = [{name:"Milk", price:15}, {name:"Water", price:9}, {name:"Bread", price:5}];

// JavaScript

// function filterProducts() {

//  let cheapProducts = [];

//  for (let i = 0; i < products.length; i++) 

//  {

//    if (products[i].price < 10) cheapProducts.push(products[i]);

//  }

//  console.log(cheapProducts);
  
// }
// filterProducts()


// ES6

// const filterProducts = () => products.filter(product => product.price > 10);
// console.log(filterProducts());



// function changeProducts() {

//     for (let i = 0; i < products.length; i++) {
//        let discountPrice = products[i].price * 0.2;
       
//        products[i].price -= discountPrice
      
//     }
   
//     return products
   
//    }
//    console.log(changeProducts());
   
   
   
   // ES6
   
//    const changeProducts = () =>
   
//     products.map(product => {
//         const discount = product.price * 0.2;
//         return{ 
//         ...product,
//         price: product.price - discount 
//     }
//     });
   
//    console.log(changeProducts());
//    console.log(products);


// joining array items
// let arr = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let allArr = arr.concat(arr2)

//spread operator
// ES6
// let allArr1 = [...arr, ...arr2]
// console.log(all`q Arr1);

