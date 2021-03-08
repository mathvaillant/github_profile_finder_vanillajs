// Get Classes
const github = new Github()
const ui = new UI()

// Search input
const searchUser = document.querySelector('#searchUser')

// Search input event
searchUser.addEventListener('keyup', (e) => {
  // Get Input text
  const userText = e.target.value

  if (userText !== '') {
    // Get user
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // User not found => ui.showAlert(message, style)
        console.log('Error')
      } else {
        //User found => ui.displayUser(data)
        console.log(data)
      }
    })
  } else {
    // Clear profile ui.clearProfile()
  }
})
