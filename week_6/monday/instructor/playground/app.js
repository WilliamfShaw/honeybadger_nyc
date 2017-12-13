window.onload = function () {
    const heading = document.getElementById('main-heading');
    const heading2 = document.getElementsByTagName('h1'); // grab all of specific tag returns array like structure
    const listItems = document.getElementsByClassName('list-item'); // grab all of specific class returns an array like structure
    const image = document.querySelector('#image'); // return item by using its css selector
    const descriptions = document.querySelectorAll('.description'); // return all items using the css selector

    // ACCESSING ITEMS FROM AN ARRAY LIKE STRUCTURE

    listItems[0];
    listItems[1];

    // ACCES TEXT OF A NODE

    console.log(heading.innerHTML);

    // EDITING THE CONTENT OF A NODE

    heading.innerHTML = 'WELCOME TO THE JUNGLE';
    descriptions[0].innerHTML;

    // ADDING ELEMENTS TO THE DOM

    let newLi = document.createElement('li');
    newLi.classList.add('list-item');
    newLi.innerHTML = 'NEW LI';
    newLi.id = 'new-id';

    const list = document.getElementById('the-list');
    list.appendChild(newLi);

    // REMOVING ELEMENTS FROM THE DOM

    const lastLi = document.getElementById('new-id');
    lastLi.remove();

    listItems[1].remove();

    // UPDATING STYLING

    heading.style.color = 'red';
    heading.style.fontFamily = 'Arial';

    function doSomething() {

    }
} // use this style moving forward
