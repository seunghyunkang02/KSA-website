
const readMoreBtn2 = document.querySelector('.read-more-btn2');
const text2 = document.querySelector('.text2');

readMoreBtn2.addEventListener('click', (e)=>{
    text2.classList.toggle('show-more2');
    if(readMoreBtn2.innerText === 'Read more'){
        readMoreBtn2.innerText = 'Read less';
    }
    else{
        readMoreBtn2.innerText = 'Read more';
    }
})