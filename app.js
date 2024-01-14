// import { a } from "./index.js"; 

// console.log(a);

// let arr = ['Aziz', 'Ozodbek', 'Salom', 'Yaxyobek']

// // let [a, b, c] = arr
// // let [a,,b] = arr
// let [a, b, ...res] = arr

// console.log(...res);

// let arr = {
//     id: 3,
//     name: "Lanbarghini",
//     weight: 3500,
//     color: 'black',
// };

// let {color, weight, ...res} = arr;
// console.log(res);

// let a = document.getElementById('as')
// let ad = document.getElementsByTagName('p')
// let ad = document.getElementsByClassName('ed')
// let ad = document.querySelectorAll('p')
// console.log(ad);








// 1 - masala

// let arr = [4, 5]
// let [a, b] = arr
// console.log(a, b);

// 2 - masala

// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...res] = arr;
// console.log([a, b]);
// console.log(res);

// 4 - masala

// let arr = { car: { 
//     name: "Lambargihini", 
//     model: "Aventador", 
//     speed: 400, 
//     color: "Black"
//     }};

// let {
//   car: {name, model, speed, color},
// } = arr;

// console.log("name:", name);
// console.log("model:", model);
// console.log("speed:", speed);
// console.log("color:", color);

// 5 - masala

// let user = {
//     name: "doe",
//     age: 17,
//   };
  
//   let {name, age, email = "ozodbek@gmail.com", weight = 60} = user;
//   console.log("Name:", name);
//   console.log("Age:", age);
//   console.log("weight:", weight);
//   console.log("Email:", email);
  

// 7 - masala

// let a = { 
//     x: 12, 
//     y: 28,
// };

// function arr({ x, y }) {
//   return x + y;
// }

// function rra(arg) {
//   let max = arr({ ...arg });

//   return max;
// }

// console.log(rra(a));