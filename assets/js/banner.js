const slider = document.querySelector('#slider'); 
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft =document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right'); 

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSelectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s"; 
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSelectionFirst)
        slider.style.marginLeft = "-100%";
     }, 500); 
}

function Prev() {
    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s"; 
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
     }, 500);
}

setInterval(() => {
    Next();
}, 5000);

btnLeft.onclick = Next; 
btnRight.onclick = Prev; 
