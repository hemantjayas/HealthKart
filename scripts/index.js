
// sliding for single object

let count = 0;

let slide = document.querySelectorAll('#slide>div');
console.log(slide);

function startSlide() {
    slide[count].style.display = 'block'


}

export {startSlide}
startSlide()
let btnRight = document.getElementById('right');

btnRight.onclick = function () {
    if (count < slide.length - 1) {

        slide[count].style.display = 'none'
        count++
        startSlide()
    }
}



let btnLeft = document.getElementById('left');
btnLeft.onclick = function () {
    if (count > 0) {
        slide[count].style.display = 'none'
        count--
        startSlide()
    }
}

setInterval(() => {

    if (count == slide.length - 1) {

        slide[count].style.display = 'none'
        count = 0;
        slide[count].style.display = 'block'


    }
    else {

        slide[count].style.display = 'none'

        count++
        slide[count].style.display = 'block'
    }

}, 4000);
// ending   ending           ending         ending             ending        ending     ending   
  




