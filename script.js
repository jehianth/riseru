function goToLink(url) {
  window.location.href = url;
}

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

// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});