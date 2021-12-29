
///////// animation when entering site ////////////////

let myStorage = window.localStorage;
myStorage.setItem('intro-played', false);

const intro = document.querySelector('.intro');
const intro_logo = document.querySelector('.intro-logo');
const intro_name = document.querySelectorAll('.intro-name');
const intro_description = document.querySelector('.intro-description');
const intro_wip = document.querySelector('.intro-wip');


window.addEventListener('DOMContentLoaded', ()=>{

    console.log(myStorage.getItem('intro-played'))
    if (myStorage.getItem('intro-played') == 'false'){
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

            myStorage.setItem('intro-played', true);

        });
    }

});