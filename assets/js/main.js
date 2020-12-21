const navBtn = document.querySelector('.nav__btn');
const offsetMenu = document.querySelector('.offset__menu');
const closeBtn = offsetMenu.querySelector('.close__btn');
const control = document.querySelector('#control');
const pauseIcon = document.querySelector('.pause');
console.log(pauseIcon);

// Add Event
navBtn.addEventListener('click', clickHandler);
closeBtn.addEventListener('click', closeHandle);

function clickHandler() {
    offsetMenu.classList.add('open');
}

function closeHandle() {
    offsetMenu.classList.remove('open');
}

$(document).ready(function(){
    $('.venobox').venobox();    
});


function scroll() {
    const header = document.querySelector('#header');
    let getHeightHeader = header.offsetHeight;
    const navBtn = document.querySelector('.nav__btn');
    const barIcon = navBtn.querySelector('span');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > getHeightHeader) {
            barIcon.classList.add('active');
        } else{
            barIcon.classList.remove('active');
        }
    });
}
scroll();