window.onload = function () {
    const title = document.getElementById('page-title');
    const awesomeList = document.getElementById('awesome-list');

    const newLi = document.createElement('li');
    newLi.classList.add('awesome-list-item');
    newLi.innerHTML = 'everybody loves vanilla';
    awesomeList.appendChild(newLi);

    const image = document.getElementById('image-container');
    image.remove();
    document.body.appendChild(image);

    title.classList.add('red')

    const description = document.getElementById('description');
    description.classList.add('green');

    const list = document.getElementsByClassName('awesome-list-item');
    for(let i = 0; i < list.length; i++) {
        let currentItem = list[i];
        currentItem.classList.add('blue');
    }

    // awesomeList.classList.add('blue');

    const footer = document.createElement('footer');
    footer.innerHTML = 'Thanks for visiting.....Have an ICE day';
    footer.classList.add('red');
    document.body.appendChild(footer);
}
