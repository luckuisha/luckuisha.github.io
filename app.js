
///////// animation when entering site ////////////////

let intro = document.querySelector('.intro');
let intro_logo = document.querySelector('.intro-logo');
let intro_name_header = document.querySelector('.intro-name-header');
let intro_name = document.querySelectorAll('.intro-name');
let intro_description_header = document.querySelector('.intro-description-header');
let intro_description = document.querySelector('.intro-description');
let intro_wip_header = document.querySelector('.intro-wip-header');
let intro_wip = document.querySelector('.intro-wip');


window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=> {
        //fade in
        setTimeout(()=> {
            intro_logo.classList.add('active');
            intro_description.classList.add('active');
            intro_wip.classList.add('active');
            intro_name.forEach((span, idx) => {
                setTimeout(()=>{
                    span.classList.add('active');
                }, (idx + 1) * 400);
            });
        }, 100);
        
        //fade out
        setTimeout(()=> {
            intro_logo.classList.remove('active');
            intro_logo.classList.add('fade');
            intro_description.classList.remove('active');
            intro_description.classList.add('fade');
            intro_wip.classList.remove('active');
            intro_wip.classList.add('fade');
            intro_name.forEach((span, idx) => {
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 400);
            });
        }, 3000);

        //remove overall div
        setTimeout(()=> {
            intro.style.top = '-100vh';
        }, 5000);

    });

});