//recap excericse //

const posts = [
  {
      name: "Eli Ohana",
      text: "Im num 1"
  },
  {
      name: "Dorothy",
      text: "Evreyone love me"
  },
  {
      name: "Avi-Ron",
      text: "All the people around me laugh because my name ."
  }
]
$('#postButton').on('click', function () {
  posts.push({
      name: $('#name').val(),
      text: $('#text').val()
  })
  render()
})

$('#timeline').on('click', '.post', function () {
  for (let i in posts) {
      if (`${posts[i].name}: ${posts[i].text}` === $(this).text()) {
          posts.splice(i, 1)
      }
  }
  render()
})

const render = function () {
  $('#timeline').empty()
  for (let i in posts) {
      $('#timeline').append(
          `<div class="post">${posts[i].name}: ${posts[i].text}</div>`
      )
  }
}
render() 
////
