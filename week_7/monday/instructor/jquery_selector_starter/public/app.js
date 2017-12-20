$(function(){
	// const vanillaAside = document.getElementById('awesome');
	// console.log(vanillaAside);

	// const $aside = $('#awesome');
	// console.log($aside);

	// const vanillaYay = document.getElementsByClassName('yay');
	// console.log(vanillaYay);

	// const $yay = $('.yay');
	// console.log($yay);

	// const newLi = document.createElement('li');
	// newLi.classList.add('whatever');
	// document.body.appendChild(newLi);

	// const $newLi = $('<li class="whatver">');
	// $('body').append($newLi);

	// const $header = $('.container h1');
	// console.log($header.html());
	// $header.text('WAHHHHOOOOOOOOO');


	// // SET THE TEXT OF THE GOOGLE LINK TO 'GO TO GOOGLE'
	// const $googleLink = $('.google');
	// $googleLink.text('GO TO GOOGLE');

	// // SET THE HTML OF LINK HOLDER TO BE THE GOOGLE LINK
	// const $linkHolder = $('.link-holder');
	// $linkHolder.html($googleLink);

	// const $h1 = $(`
	// 	<div>
	// 	<h1>WALKDHSLFHJALFHFKJH</h1>
	// 	<p>JKLhsdjldafjhlkdfjldfjlkfjalkfjald</p>
	// 	</div>
	// `);

	// $('body').append($h1);
	// // $h1.appendTo('body');

	// $('body').prepend($h1);
	// // $h1.prependTo('body');

	// $h1.remove();
	// // $('.second').empty();

	// TAKE THE UL WITH THE CLASS OF SECOND AND APPEND IT TO THE LINK HOLDER DIV

	const $second = $('.second');
	$('link-holder').append($second);

	// PREPEND THE LINK HOLDER DIV TO THE CONTAINER DIV
	const $linkHolder = $('.link-holder');
	$('.container').prepend($linkHolder);

	// EMPTY THE SECTION WITH THE CLASS OF ASIDES AND APPEND ALL ASIDES THAT EXIST IN THE PAGE TO IT
	const $asideSection = $('.asides');
	const $allAsides = $('aside');
	$asideSection.empty();
	$asideSection.html($allAsides);

	const $circle = $('.circle');
	$circle.css('background-color', 'blue');

	$circle.addClass('WAHOAHAO');
	$circle.removeClass('whatever');

	// $circle.parent();
	$circle.children();
	console.log($circle.children().find('asides'));
});
