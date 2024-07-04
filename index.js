const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function toggleSignupForm() {
	const signupForm = document.getElementById('signup-form');
	signupForm.style.display = (signupForm.style.display === 'none') ? 'block' : 'none';
}