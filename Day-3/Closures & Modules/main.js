// const foo = function () {
//   const x = 1

//   const bar = function () {
//     console.log(x) //notice this inner function using the outer function's variable
//   }

//   return bar
// }

// const baz = foo() //out here, x doesn't exist
// baz() //but when we invoke baz, we're printing x!

// const setCounter = function (num) {
//   let counter = 0

//   const count = function () {
//     counter += num;
//     console.log(counter)
//   }

//   return count
// }

// const increment = setCounter(2)
// increment()
// increment()
// increment()
// console.log(counter)

// const family = function() {
//   const members = []

//   const birth = function (name) {
//     members.push(name)
//     console.log(members)
//   }

//   return birth
// }
//  const giveBirth=family()
// giveBirth("Yarin")
// // giveBirth("Avi")

// const mathOperations = function () {
//   const add = function (x, y) {
//       return x + y;
//   }

//   const subtract = function (x, y) {
//       return x - y;
//   }

//   const multiply = function (x, y) {
//       return x * y;
//   }

//   const divide = function (x, y) {
//       return x / y;
//   }
//   return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide
// }

// }
// const m = mathOperations()
// console.log(m.add(3, 4))
// console.log(m.add(13, 29))
// // console.log(m.mult(1.75, 24))

// const UsersModule = function () {
//   const _users = ['Aaron', 'Avi'];

//   const addUser = function (user) {
//       _users.push(user)
//   }

//   const listUsers = function () {
//       for (let user of _users) {
//           console.log(user)
//       }
//   }

//   return {
//       addUser: addUser,
//       listUsers: listUsers
//   }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('Yarin')
// usersModule.addUser('Lior')
// usersModule.listUsers()

const StringFormatter = function () {

  const capitalizeFirst = function (string) {
    return console.log(string[0].toUpperCase() + string.substring(1).toLowerCase())
  } 
  const skewerCase = function (string) {
    return console.log(string.replace(' ', '-'))
  }
return { 
  capitalizeFirst,
  skewerCase }
}

const formatter = StringFormatter()
formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box


//excericse 2//
let money = 500
const depositCash = function (cash){
  return money += cash
}
    