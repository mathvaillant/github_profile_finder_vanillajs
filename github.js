// The Github class holds the user data and its functions
// This file takes care of reaching out to the API
class Github {
  constructor() {
    this.client_ID = '629068ceae4911361c9e'
    this.client_secret = '3ef2e6bfc500d2a199baeda12d0b90e76c5829f4'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`
    )

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`
    )

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {
      profile: profile,
      repos: repos,
    }
  }
}
