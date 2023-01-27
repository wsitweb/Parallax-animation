window.onload = function() {
    document.querySelectorAll('.parallax__list>li').forEach((currentValue, index, array) => {
        currentValue.classList.add('layer');
    })
    $('.parallax__list').parallax();    
    document.querySelector('.wrapper').classList.add('active');

    let sizeArr = [
        siz_1 = Math.ceil((window.outerWidth / 100 / 19.2) * 100) / 100,
        siz_2 = Math.ceil((window.outerWidth / 100 * 0.0546875) * 100) / 100,
        siz_3 = Math.ceil((window.outerWidth / 100 * 0.0588541666666667) * 100) / 100,
        sizElementSpan = Math.ceil((window.outerHeight / 100 * 0.2 -1.32) * 100) / 100,
    ];
    console.log(sizElementSpan);
    document.querySelectorAll('.parallax__rope').forEach((currentValue, index, array) =>{
        currentValue.style.transform = `scale(${sizeArr[index]})`
        Array(currentValue.children).forEach((currentValue, index, array) => {
            for(let num = 0; num < currentValue.length; ++num){
                if(currentValue[num].tagName != 'IMG'){
                    console.log(currentValue[num].children);
                    currentValue[num].children[0].style.scale = sizElementSpan;
                }
            }
        });
    });
};
