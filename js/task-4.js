'use strict';

const loginForm = document.querySelector(".login-form");

const data = {};

loginForm.addEventListener("submit", submitEvent => {
submitEvent.preventDefault();

    if (loginForm.elements.email.value === '' || loginForm.elements.password.value === '') {
        alert('All form fields must be filled in');
    } else {
        data.email = loginForm.elements.email.value.trim();
        data.password = loginForm.elements.password.value.trim();
    }
    console.log(data);

    submitEvent.target.reset();
});

