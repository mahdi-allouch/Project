/* show & hide drop down list */
const profileIcon = document.getElementById("profile-icon");
const dropDownCard = document.getElementById("dropDownCard");

profileIcon.addEventListener("click", () => {
  showHideDropdown();
});

const showHideDropdown = () => {
  dropDownCard.style.opacity = dropDownCard.style.opacity === "1" ? "0" : "1";
  dropDownCard.style.transform =
    dropDownCard.style.transform === "translateY(10px)"
      ? "translateY(-10px)"
      : "translateY(10px)";
  dropDownCard.style.pointerEvents =
    dropDownCard.style.pointerEvents === "auto" ? "none" : "auto";
};

window.onclick = (e) => {
  if (
    !e.target.matches("#dropDownCard") &&
    !e.target.matches("#profile-icon")
  ) {
    dropDownCard.style.opacity = "0";
    dropDownCard.style.transform = "translateY(-10px)";
    dropDownCard.style.pointerEvents = "none";
  }
};
/* end show & hide drop down list */

// all options
const signup = document.getElementById("signup");
const login = document.getElementById("login");
const editProfile = document.getElementById("edit-profile");
const settingPrivacy = document.getElementById("setting-privacy");
//******** */

// select close buttons
const closeSignupCard = document.getElementById("close-signup-card");
const closeLoginCard = document.getElementById("close-login-card");
const closeEditProfileCard = document.getElementById("close-editprofil-card");
const closeSettingPrivacyCard = document.getElementById(
  "close-settingprivacy-card"
);

// all cards wrapper container
const containerCards = document.getElementById("container-cards");
const signupContainer = document.getElementById("sign-up-container");
const loginContainer = document.getElementById("login-container");
const editProfileContainer = document.getElementById("edit-profile-container");
const settingPrivacyContainer = document.getElementById(
  "setting-privacy-container"
);

/* show & hide cards after click on any option in drop down list */

// close cards
closeSignupCard.addEventListener("click", () => {
  containerCards.style.display = "none";
  signupContainer.style.display = "none";
});
closeLoginCard.addEventListener("click", () => {
  containerCards.style.display = "none";
  loginContainer.style.display = "none";
});
closeEditProfileCard.addEventListener("click", () => {
  containerCards.style.display = "none";
  editProfileContainer.style.display = "none";
});
closeSettingPrivacyCard.addEventListener("click", () => {
  containerCards.style.display = "none";
  settingPrivacyContainer.style.display = "none";
});

signup.addEventListener("click", () => {
  containerCards.style.display = "flex";
  signupContainer.style.display = "flex";
  showHideDropdown();
  const passwordInput = document.getElementById("password-input-signup");
  const eyeBtn = document.getElementById("btn-eye-input-signup");
  eyeBtn.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";

    eyeBtn.style.textDecoration =
      passwordInput.type === "password" ? "none" : "line-through white 4px";
  });
});

login.addEventListener("click", () => {
  containerCards.style.display = "flex";
  loginContainer.style.display = "flex";
  showHideDropdown();
  const passwordInput = document.getElementById("password-input-login");
  const eyeBtn = document.getElementById("btn-eye-input-login");
  eyeBtn.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";

    eyeBtn.style.textDecoration =
      passwordInput.type === "password" ? "none" : "line-through white 4px";
  });
});
editProfile.addEventListener("click", () => {
  containerCards.style.display = "flex";
  editProfileContainer.style.display = "flex";
  showHideDropdown();
});
settingPrivacy.addEventListener("click", () => {
  containerCards.style.display = "flex";
  settingPrivacyContainer.style.display = "flex";
  showHideDropdown();
});
/* end show & hide cards  */

// cancel button in setting & privacy card
const cancelBtnSetting = document.getElementById("cancel-btn-setting");

cancelBtnSetting.addEventListener("click", () => {
  containerCards.style.display = "none";
  settingPrivacyContainer.style.display = "none";
});

// Go to login and reverse
const btnSignin = document.getElementById("btn-signin-card");
btnSignin.addEventListener("click", () => {
  signupContainer.style.display = "none";
  loginContainer.style.display = "flex";
});
const btnSignup = document.getElementById("btn-signup-card");
btnSignup.addEventListener("click", () => {
  loginContainer.style.display = "none";
  signupContainer.style.display = "flex";
});

// edit profile
const changeFieldContainer = document.getElementById("change-field-container");
const changeTextField = document.getElementById("change-text-field");
const changeFileField = document.getElementById("change-file-field");

const saveButtons = document.querySelectorAll(".btn-change-field");

const nameField = document.querySelector("#name-field");
const usernameField = document.querySelector("#username-field");
const profileImgField = document.querySelector("#profile-img-field");
const avatarField = document.querySelector("#avatar-field");

nameField.addEventListener("click", () => {
  changeFieldContainer.style.display = "flex";
  changeTextField.style.display = "block";
});
usernameField.addEventListener("click", () => {
  changeFieldContainer.style.display = "flex";
  changeTextField.style.display = "block";
});
profileImgField.addEventListener("click", () => {
  changeFieldContainer.style.display = "flex";
  changeFileField.style.display = "block";
});
avatarField.addEventListener("click", () => {
  changeFieldContainer.style.display = "flex";
  changeFileField.style.display = "block";
});

saveButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeTextField.style.display = "none";
    changeFileField.style.display = "none";
    changeFieldContainer.style.display = "none";
  });
});
