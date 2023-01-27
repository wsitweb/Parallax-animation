window.onload = function() {
    document.querySelectorAll('.parallax__list>li').forEach((currentValue, index, array) => {
        currentValue.classList.add('layer');
    })
    $('.parallax__list').parallax();    
    document.querySelector('.wrapper').classList.add('active');
};