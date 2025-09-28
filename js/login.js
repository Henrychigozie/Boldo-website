    function toggleMenu() {
      document.querySelector(".nav-links").classList.toggle("show");
    }

const carousel = document.getElementById('carousel');
    const track = document.getElementById('track');

    // 

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });








const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showSignin = document.getElementById('showSignin');


showSignup.addEventListener('click', () => {
signinForm.classList.add('hidden');
signupForm.classList.remove('hidden');
});


showSignin.addEventListener('click', () => {
signupForm.classList.add('hidden');
signinForm.classList.remove('hidden');
});


signinForm.addEventListener('submit', (e) => {
e.preventDefault();
alert('Signed in successfully!');
});


signupForm.addEventListener('submit', (e) => {
e.preventDefault();
alert('Account created successfully!');
});