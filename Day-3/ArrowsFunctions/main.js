// // // let users = []

// // // const getData = function () {
// // //     users = [{ name: "Rick" }, { name: "Morty" }]
// // //     console.log("Got users")
// // // }

// // // const displayData = function () {
// // //     console.log("Going to display users")
// // //     for (user of users) {
// // //         console.log(user.name)
// // //     }
// // // }

// // // getData()
// // // displayData()

// // const getData = function () {
// //   setTimeout(function () {
// //       users = [{ name: "Rick" }, { name: "Morty" }]
// //       console.log("Got users")
// //   }, 3000)
// // }

// // getData()

// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }
// getData()
// displayData()

// const first = function () {
//   setTimeout(function () {
//       console.log("should be first")
//   }, 3000)
// }

// const second = function () {
//   console.log("should be second")
// }

// first()
// second()

// const first = function (callback) { //receive the function as a parameter
//   setTimeout(function () {
//       console.log("should be first")
//       callback() //this is the `second` function being invoked
//   }, 3000)
// }

// const second = function () {
//   console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument

// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)
// // displayData()

// const doSomething = function(){
//   console.log("something111")
// }

// setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds

// const timer = function(){
//   console.log(new Date())
// }

// setInterval(timer, 1000)

// setInterval( function () {
//   console.log( new Date () )
// }, 1000)

// const greet = (name) => {
//   console.log(" Hello there " + name )
// }
// greet("yarin")

// const greet = (name) => console.log("Hello there, " + name)

// greet("yarin") //prints "Hello there, Jolene"

// const greet = name => console.log("Hello there, " + name)

// greet("yarin") //prints "Hello there, Jolene"

// const square = (number) => console.log("should print " + number * number)

// square(4)

// const getHypotenuse = (a, b) => {
//   const aSquared = a * a
//   const bSquared = b * b
//   const cSquared = aSquared + bSquared
//   return Math.sqrt(cSquared)
// }

// const hypoteneuese = getHypotenuse(3, 4)
// console.log(hypoteneuese ) //prints 5

// const getFormalTitle = (title, name) => title +" " + name

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

// const suspenseBuilder = {
//   name: "El Mysterio",
//   displayName: function () {

//       console.log("You are going to see the name in 3 seconds...")

//       setTimeout(() => { //this is the change
//           ﻿console.log("The name is: " + this.name)
//       }, 3000)

//   }
// }

// suspenseBuilder.displayName()

//excerise 1//
// const push = function () {
//   console.log("pushing it!")
// }

// const pull = function () {
//   console.log("pulling it!")
// }
// const pushPull = func => func()

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"

// //excerise 2 //
// const time = new Date();
// const returnTime = function (time) {
//   alert("The current time is: " + time);
// };
// const getTime = func => func(time);

// getTime(returnTime);

//excerice 3 ///
// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };
// const logData = data => alert (data)
// displayData(alert, logData, "I like to party")


//excerice 4///
// let sum = (a, b , c) => a + b + c;

// alert( sum(4, 5 ,6))

//excercise 5//
// let capitalize = name => console.log(`${name[0].toUpperCase()+name.substring(1).toLowerCase()}`)
// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia

//exercise 6///
// const determineWeather = temp => {
//   if(temp > 25){
//     return "it's hot"
//   }
//   return "it's cold"
// }

//   const commentOnWeather = temp => console.log(determineWeather(temp))

// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"

  //excerisce 7//
  // const explode = (lightFunc, soundFunc, sound) => {
  //   lightFunc()
  //   soundFunc(sound)
  // }
  // const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
    
  // const makeSound = sound => alert(sound)
    
  // explode(shineLight, makeSound, "BOOM")
  
  const run = (name) => {console.log("Run, " + name + ", run!")}
  const yell = function(action){
      let env = "Forest"
      action(env)
  }
  run(yell)
