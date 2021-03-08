// The Github class holds the user data and its functions
// This file takes care of reaching out to the API
class Github {
  constructor(repos_count, repos_sort, client_ID, client_Secret) {
    this.client_ID = '22d9a8acb8fa4ebe30fb'
    this.client_secret = '43ee48cac9b71898db3468c3528bdbb4031d22aa'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`
    )

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos`
    )

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {
      profile: profile,
      repos: repos,
    }
  }
}
