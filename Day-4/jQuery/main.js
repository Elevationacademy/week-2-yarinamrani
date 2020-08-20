// const elem = $("#id") // id

// const elems = $(".class-name") // class

// const header =$('header')
// console.log(header)
// const sayHi = function(){
//   console.log("Hi!")
// }

// const $ = sayHi

// $() //prints "Hi!"

// $("h4")
// $("h4").css("color", "red")
// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("#green").css("color", "green")
// $("#pink").css("color", "pink")
// $("#brown-div").css("color", "brown")
// $("#b1").addClass("box");
// $("#b2").addClass("box");
// $('#my-input').val("Terabyte")
// const color = $("div").data().color  
// console.log(color) //prints #2980b9
// const data = $("div").data()
// console.log("The item with barcode " + data.barcode + " will expire on " + data.expirationdate )

// $('button').on('click', function () {
//   alert('clicked!')
// })
// const clicked = function () {
//   alert('clicked!')
// }

// $('button').click(clicked)
// $("#hover").hover(function () {
//   $("#hover").css("background-color", "green")
// })

// $("button").on("click", function () {
//   alert($("#my-input").val())
// })

///This//
// $("#b1").hover(function () {
//   console.log($(this))
// })

// $(".box").hover(function () {
//   $(this).css("background-color", "blue")
// })

// //Creating & Adding/Removing//
// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)
// $("body").append(elem)


// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")

// console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

// $(".feedme").on("click", function(){
//   let divCopy = `<div class='feedme'>${$(this).text()}</div>`
//   const elem = $(divCopy)  //use template literals and $(this)
  
//   $("body").append(elem)
// })

// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// // }

// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" }
// ]

// for(let i =0; i < names.length; i++){
//   $("body").append(`<div class=human>${names[i].first} - ${names[i].last}</div>`)
// }

// $("p").remove(".brown")

// $("#erase").hover(function() {
//   $("#erase").remove()
// })

// $("button").on("click", function () {
//   const blogDiv = `<div class='blog'>aperol shpritz</div>`

//   const elem = $(blogDiv)

//   $("#blogs").append(elem)
// })

// $("button").on("click", function () {
//   const blogDiv = $('.blog')

//   blogDiv.text('blrgh')
// })


// $(".feedme").on("click", function(){
//   let divCopy = `<div class='feedme'>${$(this).text()}</div>`
//   const elem = $(divCopy)  //use template literals and $(this)
  
//   $("body").append(elem)
// })
const addDiv = function() {
  $("body").append("<div class=box></div>");
};

$("button").on("click", function() {
  addDiv();
})

$("body").on("click", ".box", function() {

  alert("hi");
})



/// jQuery excercies//
$("body").append('<input type="text" id="my-input" placeholder="Some Text!">')

$("body").append('<button>Add Human</button>')

 

$('button').on('click', function() {
  const inputValue = $('#my-input').val();

  $("ul").append(`<li id=${inputValue}>${inputValue}</li>`)
})

$("ul").on("click", function() {
  const valueToRemove = $(this).text()

  console.log(valueToRemove)

  $(`#${valueToRemove}`).remove()
})


//excericse 2//


