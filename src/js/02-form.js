const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', renderPage);

feedbackForm.addEventListener('input', onInput);
feedbackForm.addEventListener('submit', onSubmit);

function onInput(event) {
  const inputEmail = feedbackForm.email.value.trim();
  const inputMessage = feedbackForm.message.value.trim();
  const inputData = { email: inputEmail, message: inputMessage };
  localStorage.setItem(localStorageKey, JSON.stringify(inputData));
}

let userData = {};

function renderPage() {
  userData = localStorage.getItem(localStorageKey);
  if (userData) {
    const { email, message } = JSON.parse(userData);
    feedbackForm.email.value = email;
    feedbackForm.message.value = message;
  }
}

function onSubmit(event) {
  event.preventDefault();
  if (feedbackForm.email.value === '' || feedbackForm.message.value === '') {
    alert('All form fields must be filled in');
  } else {
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(JSON.parse(userData));
  }
}
