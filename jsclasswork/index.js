// question 1
// let city = "New York";
// city = "Los Angeles";
// console.log(city);

// const country = "USA";
// country = "canada";
// console.log(country);

// question 2

// let age = 10;b
// console.log(age);

// let name = "martins"
// console.log(name);

// let developer = true;
// console.log(developer);

// let  message = null;
// console.log(message);

// let score;
// console.log(score);

// null means a value that has been defined but has nothing in it
// undefined is a variable that has been decleared but has no value assigned to it

// question 3

// function calculatescores (score1, score2, bonus){
//     return score1 + score2 + bonus;
// }
// console.log(calculatescores(90, 3, 51));

// question 4
// let fruits = ["apple","orange","banana","mango","watermelon"];
// fruits.push("pear");
// fruits.pop();
// fruits.unshift("kiwi");
// console.log(fruits);
// console.log(fruits.length);

// question 5
// let book =
// {
//     title: "The Titanic ",
//     author: "J.D. Salinger",
//     year: 1951,
//     isavailable: true,
//     publisher:{
//         name: "HarperCollins",
//         location: "New York"
//     }

// };
// console.log(book);
// console.log(book.title);
// console.log(book.year);
// console.log(book.publisher.name);

// question 6


function verifyage(){
    let age = prompt("Enter your age");
    if (age < 18){
        alert("you are a minor")
    }   
    else if (age <= 65){
        alert("you are an adult")
    }
    else if(age > 65){
        alert("you are a senior")
    }
}

// question 7


    let a = 10;
    let b = 20;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
    console.log(a > b);
    console.log(a < b);
    console.log(a == b);
    console.log(a !== b);
 
    // question 10
    let score = 75
    let result = (examscore >= 50) ? "you passed" : "you failed"