class UI {
  constructor() {
    this.errorMsg = document.getElementById("error-msg");
    this.userProfile = document.getElementById("users");
    this.userInput = document.getElementById("user-input");
    this.spinner = document.getElementById("spinner");
  }
  clearError() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
    if (this.userInput === "") {
      this.errorMsg.innerHTML = "";
    }
  }
  showError(msg, className, src) {
    this.clearError();
    this.clearUserInfo();
    this.errorMsg.innerHTML = `
    <div class=${className}>
      <img src=${src} alt="404 Error">
      <div>
        <h2>Oops!!</h2>
        <p>${msg}</p>
      </div>
    </div>`;
    setTimeout(this.clearError, 3000);
  }
  showUser(userData) {
    this.clearError();
    this.userProfile.innerHTML = `
    <div class="users-container shadow">
      <div class="info">
      <div class="user-avatar">
        <img src=${userData.avatar_url} alt="avatar">
      </div>
        <div class="user-info-wrapper">
          <div class="user-info-name flex">
            <h2>Name:</h2>
            <span>${userData.name === null ? " -" : userData.name}</span>
          </div>
          <div class="user-info-name flex bio">
            <h2>Bio:</h2>
            <p>${userData.bio === null ? " -" : userData.bio}</p>
          </div>
          <a href=${
            userData.html_url
          } class="btn" target="_blank">View Full Profile on GitHub</a>
        </div>
        </div>
        <div class="extra-info-container flex">
          <div class="extra-info flex">
            <div class="extra-info-icon">
              <span class="material-symbols-outlined">
                groups
                </span>
            </div>
            <div class="extra-info-profile flex">
              <span>Followers</span>
              <p>${userData.followers}</p>
            </div>
          </div>
          <div class="extra-info flex">
            <div class="extra-info-icon">
              <span class="material-symbols-outlined">
                group
                </span>
            </div>
            <div class="extra-info-profile flex">
              <span>Following</span>
              <p>${userData.following}</p>
            </div>
          </div>
          <div class="extra-info flex">
            <div class="extra-info-icon">
              <span class="material-symbols-outlined">
                folder_open
                </span>
            </div>
            <div class="extra-info-profile flex">
              <span>Public Repos</span>
              <p>${userData.public_repos}</p>
            </div>
          </div>
        </div>
   </div>
   <div class="container">
    <h2 class="repositories-title">Latest Repositories</h2>
   </div>
   <section id="latest-repos">
   </section>
   `;
  }
  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
      <div class="container">
        <div class="repo-info shadow">
          <div class="repo-title align-center">
            <div class="repo-name align-center">
              <span class="material-symbols-outlined">
              attach_file
              </span>
              <a href=${repo.clone_url} target=_blank><h3>${repo.name}</h3></a>
            </div>
            <div class="repo-date align-center">
            <h4>Created at:\u00A0</h4>
              <span> ${repo.created_at}</span>
            </div>
          </div>
          <p>${
            repo.description === null ? "No description" : repo.description
          }</p>
          <div class="repo-reach-container flex">
            <div class="repo-reach align-center justify-center">
            <span class="material-symbols-outlined">
            visibility
            </span>
              <span>${repo.watchers_count}</span>
            </div>
            <div class="repo-reach align-center justify-center">
              <span class="material-symbols-outlined">
              star_rate
              </span>
              <span>${repo.stargazers_count}</span>
            </div>
            <div class="repo-reach align-center justify-center">
              <span class="material-symbols-outlined">
              restaurant
              </span>
              <span>${repo.forks_count}</span>
            </div>
          </div>
        </div>
    </div>
      `;
    });
    document.getElementById("latest-repos").innerHTML = output;
  }
  clearUserInfo() {
    this.userProfile.innerHTML = "";
  }
  showSpinner(img) {
    this.clearUserInfo();
    this.clearError();
    this.spinner.innerHTML = `
      <img src=${img} alt="loading..." width="200px" height="200px">
    `;
  }
  hideSpinner() {
    this.spinner.innerHTML = "";
  }
}
