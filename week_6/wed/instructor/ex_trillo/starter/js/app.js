window.onload = function () {
    const removeButtons = document.querySelectorAll('.delete');
    const finishButtons = document.querySelectorAll('.finish');
    const addCardButton = document.querySelector('#new-card-button');

    for(let i = 0; i < removeButtons.length; i++) {
        addRemoveListener(removeButtons[i]);
    }

    for(let i = 0; i < finishButtons.length; i++) {
        addFinishListener(finishButtons[i]);
    }

    addCardButton.addEventListener('click', addNewCard);
}

function addRemoveListener(node) {
    node.addEventListener('click', function (e) {
        this.parentNode.remove();
    });
}

function addFinishListener(node) {
    node.addEventListener('click', function(e) {
        const parentNode = this.parentNode;
        this.remove();
        parentNode.remove();
        parentNode.classList.remove('todo');
        parentNode.classList.add('done');
        document.querySelector('#done-column .card-list').appendChild(parentNode);
    });
}

function createFinishButton() {
    const finish = document.createElement('span');
    finish.classList.add('finish');
    finish.innerHTML = 'Finish'

    addFinishListener(finish);

    return finish;
}

function createDeleteButton() {
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = 'X';

    addRemoveListener(deleteButton);

    return deleteButton;
}

function addNewCard() {
    const valueInput = document.querySelector('#new-card-text');
    const value = valueInput.value;
    const newLi = document.createElement('li');
    newLi.classList.add('card');
    newLi.classList.add('todo');
    newLi.innerHTML = value;
    newLi.appendChild(createDeleteButton());
    newLi.appendChild(createFinishButton());

    valueInput.value = '';
    document.querySelector('#todo-column .card-list').appendChild(newLi);
}
