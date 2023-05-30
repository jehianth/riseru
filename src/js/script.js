// Change URL Other Pages
function changeURL() {
  window.history.pushState("", "", "/404");
}

// Pop Up Auth
const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const overlay = document.getElementById("overlay");
const popupLogin = document.getElementById("popupLogin");
const popupSignup = document.getElementById("popupSignup");
const switchToSignup = document.getElementById("switchToSignup");
const switchToLogin = document.getElementById("switchToLogin");

loginButton.addEventListener("click", () => {
  overlay.style.display = "block";
  popupLogin.classList.add("show");
});

signupButton.addEventListener("click", () => {
  overlay.style.display = "block";
  popupSignup.classList.add("show");
});

switchToSignup.addEventListener("click", () => {
  popupLogin.classList.remove("show");
  popupSignup.classList.add("show");
});

switchToLogin.addEventListener("click", () => {
  popupSignup.classList.remove("show");
  popupLogin.classList.add("show");
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  popupLogin.classList.remove("show");
  popupSignup.classList.remove("show");
});

// Password Visibility (Login Page)
const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("password-toggle");

passwordToggle.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.classList.remove("fa-eye-slash");
    passwordToggle.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    passwordToggle.classList.remove("fa-eye");
    passwordToggle.classList.add("fa-eye-slash");
  }
});

// Password Visibility (Sign Up Page)
const signupPasswordInput = document.getElementById("signup-password");
const signupPasswordToggle = document.getElementById("signup-password-toggle");

signupPasswordToggle.addEventListener("click", function () {
  if (signupPasswordInput.type === "password") {
    signupPasswordInput.type = "text";
    signupPasswordToggle.classList.remove("fa-eye-slash");
    signupPasswordToggle.classList.add("fa-eye");
  } else {
    signupPasswordInput.type = "password";
    signupPasswordToggle.classList.remove("fa-eye");
    signupPasswordToggle.classList.add("fa-eye-slash");
  }
});

// Smooth Scroll
var overviewButton = document.getElementById("overview");
var sliderSection = document.getElementById("slider");

overviewButton.addEventListener("click", function () {
  sliderSection.scrollIntoView({ behavior: "smooth" });
});

// Owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});
