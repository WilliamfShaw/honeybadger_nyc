console.log('loaded');
// MONDAY NIGHT REVIEW

document.getElementById('taco');
document.getElementsByClassName('tacos');
document.querySelector('.tacos');
document.querySelectorAll('.tacos');

document.createElement('li');

window.onload = function () {
    const h1 = document.querySelector('#random-div h1');
    const tacosElem = document.getElementById('tacos');

    h1.addEventListener('click', function (e) {
        var h1 = e.target;
        document.body.style.backgroundColor = 'red';
    });

    tacosElem.addEventListener('dblclick', function () {
        document.body.style.backgroundColor = 'cornflowerblue';
    })
  }
