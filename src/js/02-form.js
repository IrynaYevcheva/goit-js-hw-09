'use strict';

const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
document.addEventListener('DOMContentLoaded', renderPage);

feedbackForm.addEventListener('input', onInput);
feedbackForm.addEventListener('submit', onSubmit);

let inputArr = {};

function onInput(event) {
  const inputEmail = feedbackForm.email.value.trim();
  const inputMessage = feedbackForm.message.value.trim();
  inputArr = { email: inputEmail, message: inputMessage };
  localStorage.setItem(localStorageKey, JSON.stringify(inputArr));
}

function renderPage() {
  const lsData = localStorage.getItem(localStorageKey);
  if (lsData) {
    const { email, message } = JSON.parse(lsData);
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
    console.log(inputArr);
  }
}
