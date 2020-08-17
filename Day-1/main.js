// let height = 1.73

// const grow = function(){
//   height += 0.1
// }

// grow()
// console.log(height)

// const getBaseHeight = function(){
//   const height = 1.73  
//   return height
// }

// const grow = function(){
//   height += 0.1
// }

// grow() ///// ERROR


// const names = ["Allison", "Beatrice", "Charles"]

// for(let n of names){
//   let coolName = "cool " + n
//   console.log(coolName)
// }

// console.log(coolName) // throws an error



// section 1//

// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles")  

/////
//section2//
// let cowSound = "moo"

// if (13 == "space") {
//   // let cowSound = "moo"
// }
//  else{
//   console.log("Cow says " + cowSound)
// }


//section3///
// const serveOrders = function (orders) {

//   for (let order of orders) {
//       let specialOrder = "special " + order
//       console.log("Served a " + specialOrder)
//   }
//   console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)




/// section 4///
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }
// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot) /// planting the brown seed inside a red pot etc..
// }

// plant()

/// section 5///


// const doesUserExist = function (name) {
//   const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//   for (let u of users) {
//       if (u.name == name) {
//           const found = true
//           // return found
//       }
//   }
//   // return found // by deleting=  "No idea where this person is."

// }

// const userExists = doesUserExist("Shapira")
// if (userExists) {
//   console.log("We found the ragamuffin!")
// }
// else {
//   console.log("No idea where this person is.")
// // }

// //section 6//
// let isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// // makeEnough() /// by deleting print "here we go again...""
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }


// const person = {
//   username: "Felicia",
//   introduce: function(){
//     console.log("Hi, I'm Felicia")
//   }
// }

// person.introduce() //prints "Hi, I'm Felicia"



/// JS This //
// const person = {
//   username: "Felicia",
//   introduce: function(){
//     console.log("Hi, I'm " + username)
//   }
// }

// person.introduce() //throws an error




// const counter = {
//   count: 0,

//   updateCounter: function () {
//     this.count += 1;
//   }
// };

// counter.updateCounter();
// counter.updateCounter();
// counter.updateCounter();

// alert(counter.count);

// const cat = {
//   makeNoise: function () {
//   (this.noise);
//   },
//   noise: "Meow!"
// };

// const dog = {
//   makeNoise: cat.makeNoise,
//   noise: "Woof!"
// };

// cat.makeNoise();
// dog.makeNoise();

// //spot check//
// const person = {
//   username: "Felicia",
//   introduce: function(){
//     console.log("Hi, I'm " + this.username)
//   }
// }

// person.introduce() //hi , im felicia


////excercise 1 ///


// const person = {
//   hungry: true,

//   feed: function () {
//     if (this.hungry) { /// Added this. ----> hungry
//       hungry = false;
//       alert('Im no longer hungry!')
//     }
//   }
// }

// person.feed() //should alert "I'm no longer hungry"


///excercise 2///

// const pump = function (amount) {
//   this. liters += amount; /// added this.(liters)
//   console.log('You put ' + amount + ' liters in ' + this.name); /// deleting this.(amount)
// };

// const garage = {
//   car1: {
//     name: 'Audi',
//     liters: 3,
//     fillTank: pump
//   },
//   car2: {
//     name: 'Mercedes',
//     liters: 1,
//     fillTank: pump
//   }
// };
// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ',  garage.car1.liters);
// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);



// //excercise 3//

// const pumpFuel = function (plane) {
//   plane.fuel += 1;
// };

// const airplane = {
//   fuel: 0, // we add a key of fuel , because fly was = undefined
//   fly: function () {
//     if (this.fuel < 2) { // added this. //
//       return 'on the ground!';
//     }
//     else {
//       return 'flying!';
      
//     }
//   }
// }
// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());


// Exercise 4 //

// const tipJar = {
//   coinCount: 20,
//   tip: function () {
//      return this.coinCount += 1;
//   } ,
//   stealCoins: function (numOfCoins){
//     this.coinCount -= numOfCoins
//   } 
// }

// // tipJar.tip();
// // console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// // tipJar.stealCoins(3);
// // console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// // tipJar.stealCoins(10);
// // console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


// //excercise 5 //

// const revealSecret = function (secret) {
//   return secret;
// };

// const shoutIt = function (person, func) {
//   console.log(person, func)

//   person.revealItAll = func;

//   console.log(person.revealItAll)

//   const result = person.revealItAll(person.secret)

//   console.log(result)

//   alert(person.name + " said: " + result);
// };

// const avi = {
//   name: "Avi",
//   secret: "Im scared of snakes!",
// };

// const narkis = {
//   name: "Narkis",
//   secret: "I dont have secrets because I'm zen like that.",
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);
// // tipJar.stealCoins(3);


const makeRegal = (name) => 'His Royal Highness, ' + name

const increaseByNameLength = (money, name) => money * name.length

const turnToKing = (name, money) => {
  name = name.toUpperCase()
  money = increaseByNameLength(money, name)
  name = makeRegal(name)

  console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

