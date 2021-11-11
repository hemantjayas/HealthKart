
// sliding for single object

let count = 0;

let slide = document.querySelectorAll('#slide>div');
console.log(slide);

function startSlide() {
    slide[count].style.display = 'block'


}
export {startSlide}
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
// ending nn   ending           ending         ending             ending        ending     ending   
  
// javascript starting for sliding for multiple objects

// let data = [
//     {
//         name: 1
//     },
//     {
//         name: 2
//     },
//     {
//         name: 3
//     },
//     {
//         name: 4
//     },
//     {
//         name: 5
//     },
//     {
//         name: 6
//     },
//     {
//         name: 7
//     },
//     {
//         name: 8
//     },
//     {
//         name: 9
//     },
//     {
//         name: 10
//     },
//     {
//         name: 11
//     },
//     {
//         name: 12
//     }

// ]
// let parent = document.getElementById('trending')
// data.forEach(function (product) {
//     // console.log(product.name);
//     let div = document.createElement('div')
//     let name = document.createElement('p');
//     name.innerText = product.name;

//     div.append(name)
//     parent.append(div)
// })
// let trendingLeftBtn = document.getElementById('trendingLeftBtn');


// let trendingRightBtn = document.getElementById('trendingRightBtn')

// let leftTrending = 0;
// let rightTrending = 4;

// let divsTrending = document.querySelectorAll('#trending>div')
// console.log(divsTrending);
// function trendingSlide() {
//     for (let i = leftTrending; i < rightTrending; i++) {
//         divsTrending[i].style.display = 'block'

//     }



// }
// export {trendingSlide} 


// trendingRightBtn.onclick = function () {
//     divsTrending[leftTrending].style.display = 'none'
//     leftTrending++
//     rightTrending++
//     trendingSlide()
    
//     if (leftTrending > 0) {
//         trendingLeftBtn.style.display = 'block'
//     }
//     if (rightTrending===divsTrending.length) {
//         trendingRightBtn.style.display = 'none'
        
//     }

// }

// trendingLeftBtn.onclick = function () {
//     leftTrending--
//     rightTrending--
//     divsTrending[rightTrending].style.display = 'none'

//     trendingSlide()
//     if (leftTrending == 0) {  
//         trendingLeftBtn.style.display = 'none'
//     }

//     if (rightTrending <divsTrending.length) {
//         trendingRightBtn.style.display = 'block'
//     }
// }

// java scrpit ending for multiple objects 




