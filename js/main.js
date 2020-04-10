const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
cartButton.addEventListener ("click", function (event){
  modal.classList.add('modal-is-open');
})

close.addEventListener('click', function(event){
  modal.classList.remove('modal-is-open');
})

new WOW().init();