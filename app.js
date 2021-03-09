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
    github
      .getUser(userText)
      .then((data) => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert('Not Found', 'alert-danger')
        } else {
          ui.displayProfile(data.profile)
          ui.displayRepos(data.repos)
        }
      })
      .catch((err) => console.log(err))
  } else {
    ui.clearProfile()
  }
})
