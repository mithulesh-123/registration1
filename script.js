const form = document.getElementById('registration-form');
const completionMessage = document.getElementById('completion-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    console.log('Submitted data:', { name, email, password });
    completionMessage.style.display = 'block';
});