// UI class takes care of handling and inserting stuff into the DOM
class UI {
  constructor() {
    this.profile = document.querySelector('#profile')
    this.repos = document.querySelector('#repos')
  }

  // showAlert if not found
  showAlert(message, style) {
    // Get elements
    const parentDiv = document.querySelector('.searchContainer')
    const search = document.querySelector('.search')

    // Create div
    const divMessage = document.createElement('div')
    // Add text node
    divMessage.appendChild(document.createTextNode(message))
    // Add class
    divMessage.className = `alert ${style}`
    // insert before parent
    parentDiv.insertBefore(divMessage, search)

    // Remove message
    if (divMessage) {
      setTimeout(() => {
        divMessage.remove()
      }, 2000)
    }
  }

  // display the profile
  displayProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
  `
  }

  // Display the repos
  displayRepos(repos) {
    let output = ''
    repos.map((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `
      this.repos.innerHTML = output
    })
  }

  // clearProfile()
  clearProfile() {
    this.repos.innerHTML = ''
    this.profile.innerHTML = ''
  }
}
