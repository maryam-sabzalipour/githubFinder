class Github {
  constructor() {
    this.reposCount = 5;
    this.reposSort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      {
        header: {
          Authorization: "token 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",
        },
      }
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}`,
      {
        header: {
          Authorization: "token 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",
        },
      }
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return { profile, repos };
  }

}
