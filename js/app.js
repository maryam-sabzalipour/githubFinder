const github = new Github();
const ui = new UI();
const searchInput = document.getElementById("user-input");
searchInput.addEventListener("keyup", getInput);
function getInput(e) {
  const userInput = e.target.value;
  if (userInput !== "") {
    ui.showSpinner(images.src_2);
    github.getUser(userInput).then((data) => {
      if (data.profile.message === "Not Found") {
        ui.hideSpinner();
        ui.showError(
          "The user you were looking for doesn't exist!",
          "alert",
          images.src_1
        );
      } else {
        ui.hideSpinner();
        console.log(data.profile);
        ui.showUser(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearUserInfo();
  }
}
const images = {
  src_1: "./img/3.png",
  src_2: "./img/spinner.gif",
};
