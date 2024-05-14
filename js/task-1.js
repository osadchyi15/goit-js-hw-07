'use strict';

const items = categories.querySelectorAll('.item');
console.log('Number of categories:', items.length);

items.forEach((item) => {

    const titleTagOfItem = item.querySelector('h2');
    const titleTextOfItem = titleTagOfItem.textContent;
    console.log('Category:', titleTextOfItem);

    const liCounter = item.querySelectorAll('li');
    console.log('Elements:', liCounter.length);
});