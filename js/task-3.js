'use strict';

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


input.addEventListener("input", (event) => {
    const inputText = input.value.trim();

    if (inputText === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = inputText;
    }
     
}
);