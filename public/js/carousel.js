const slider = document.getElementsByClassName('carousel-item');
const next = document.querySelector('.carousel-button-right');
const prev = document.querySelector('.carousel-button-left');
let position = 0;

let slides = slider.length;

if(next){
  next.addEventListener('click', () => {
    if(position === slides - 1){
      position = 0;
    }
    else{
      position++;
    }
    updateSlider();
  });
}

if(prev){
  prev.addEventListener('click', () => {
    if(position === 0){
      position = slides - 1;
    }
    else{
      position--;
    }
    updateSlider();
  });
}

function updateSlider(){
  for(let i = 0; i < slider.length; i++){
    slider[i].classList.remove('active');
  }
  slider[position].classList.add('active');
}