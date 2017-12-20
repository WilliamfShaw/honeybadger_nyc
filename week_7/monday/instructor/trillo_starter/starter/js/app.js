$(function() {
  $('.card-list').on('click', '.card .delete', removeCard);
  $('.card-list').on('click', '.card .finish', finishCard);
  $('#new-card-button').on('click', addCard);
});

function removeCard() {
  // this.parentNode.remove();
  $(this).parent().remove();
}

function finishCard() {
  const $this = $(this);
  const $listItem = $this.parent();
  $listItem.prependTo('#done-column .card-list')
  $this.remove();
}

function addCard() {
  const $newCardInput = $('#new-card-text');
  const inputValue = $newCardInput.val();
  const newLi = $(`
    <li class="card todo">
      ${inputValue}
      <span class="delete">X</span>
      <span class="finish">Finish</span>
    </li>
  `);

  $newCardInput.val('')

  $('#todo-column .card-list').append(newLi);
}
