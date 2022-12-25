
// Open/close popup

headerContactButton = document.querySelector('.header-contacts-button');
popupClose = document.querySelector('.popup-close');
modal = document.querySelector('.overlay');

function openPopup() {
	modal.style.display = 'block'
}
function closePopup() {
	modal.style.display = 'none'
}



headerContactButton.addEventListener("click", openPopup)
popupClose.addEventListener("click", closePopup)






$( document ).ready(function() {
    $('.slider_big').slick({
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: false,
    	fade: true,
    	asNavFor: '.slider_small'
    });
    $('.slider_small').slick({
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	asNavFor: '.slider_big',
    	focusOnSelect: true
    });
});