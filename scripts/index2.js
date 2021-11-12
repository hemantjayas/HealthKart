 //////////////////// flash sale //////////////////////

 let flashsale_protiens = [
    {
        flash_sale_img: "https://static1.hkrtcdn.com/hknext/static/media/common/variant/flash-icon.svg",
        units: "148 units left",
        imgProduct: "https://img2.hkrtcdn.com/12133/prd_1213281-MuscleBlaze-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
        price_off: "21% off",
        name: "MuscleBlaze Whey Protein, 4.4 lb Rich Milk",
        rating: " 4.4 (3,547)",
        price: 4499,
        premium_price: "₹4,364",
    },
    {
        flash_sale_img: "https://static1.hkrtcdn.com/hknext/static/media/common/variant/flash-icon.svg",
        units: "138 units left",
        imgProduct: "https://img2.hkrtcdn.com/9815/prd_981431-MuscleBlaze-BCAA-Gold-811-0.99-lb-Green-Apple_c_s.jpg",
        price_off: "30% off",
        name: "MuscleBlaze BCAA Gold, 0.99 lb 30 Servings ",
        rating: "4.6 (2,476)",
        price: 1949,
        premium_price: "₹1,745",
    },
    {
        flash_sale_img: "https://static1.hkrtcdn.com/hknext/static/media/common/variant/flash-icon.svg",
        units: "35 units left",
        imgProduct: "https://img4.hkrtcdn.com/14378/prd_1437793-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_c_s.jpg",
        price_off: "46% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral",
        rating: "  4.7 (1,547)",
        price: 499,
        premium_price: "₹364",
    },
    {
        flash_sale_img: "https://static1.hkrtcdn.com/hknext/static/media/common/variant/flash-icon.svg",
        units: "5 units left",
        imgProduct: "https://img2.hkrtcdn.com/14968/prd_1496701-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey ",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    },
    {
        flash_sale_img: "https://static1.hkrtcdn.com/hknext/static/media/common/variant/flash-icon.svg",
        units: "35 units left",
        imgProduct: "https://img4.hkrtcdn.com/14378/prd_1437793-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_c_s.jpg",
        price_off: "46% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral, Amino Acids",
        rating: "  4.7 (1,547)",
        price: 499,
        premium_price: "₹364",
    },
    {
        flash_sale_img: "https://static1.hkrtcdn.com/hknext/static/media/common/variant/flash-icon.svg",
        units: "5 units left",
        imgProduct: "https://img2.hkrtcdn.com/14968/prd_1496701-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey Protien,5 lb Double Rich",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    },
    {
        flash_sale_img: "https://static1.hkrtcdn.com/hknext/static/media/common/variant/flash-icon.svg",
        units: "35 units left",
        imgProduct: "https://img4.hkrtcdn.com/14378/prd_1437793-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_c_s.jpg",
        price_off: "46% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral, Amino Acids",
        rating: "  4.7 (1,547)",
        price: 499,
        premium_price: "364",
    },
    {
        flash_sale_img: "https://static1.hkrtcdn.com/hknext/static/media/common/variant/flash-icon.svg",
        units: "5 units left",
        imgProduct: "https://img2.hkrtcdn.com/14968/prd_1496701-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey ",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    }

]

let inner2_f = document.getElementById('inner2_f')

function flashProduct(protiens) {

    protiens.forEach((protien) => {

        let inner2_1_f = document.createElement('div')
        inner2_1_f.setAttribute('class', 'inner2_1_f')
        inner2_1_f.setAttribute('id', 'inner2_1_f')

        let inner2_1_1_f = document.createElement('div')
        inner2_1_1_f.setAttribute('class', 'inner2_1_1_f')

        let flash_sale_imgs = document.createElement('img')
        flash_sale_imgs.src = protien.flash_sale_img
        flash_sale_imgs.setAttribute('class', 'img2')

        let unit = document.createElement('div')
        unit.innerText = protien.units

        let timer = document.createElement('div')
        timer.setAttribute('class', 'timer')
        timer.setAttribute('id', 'timers')

        let inner2_1_2_f = document.createElement('div')

        let product_imgs = document.createElement('img')
        product_imgs.src = protien.imgProduct
        product_imgs.setAttribute('class', 'main_img')

        let inner2_1_3_f = document.createElement('div')

        let div1 = document.createElement('div')
        let span1 = document.createElement('span')
        span1.innerText = protien.price_off
        span1.setAttribute('id', 'inner2_1_3_1_fl')

        div1.append(span1)

        let div2 = document.createElement('div')
        div2.innerText = protien.name
        span1.setAttribute('class', 'inner2_1_3_2_f')

        let small = document.createElement('small')
        small.innerText = protien.rating + '  '
        small.setAttribute('class', 'inner2_1_3_3_f')

        let star_font1 = document.createElement('i')
        star_font1.setAttribute('class', 'fas fa-star')

        let star_font2 = document.createElement('i')
        star_font2.setAttribute('class', 'fas fa-star')

        let star_font3 = document.createElement('i')
        star_font3.setAttribute('class', 'fas fa-star')

        let star_font4 = document.createElement('i')
        star_font4.setAttribute('class', 'fas fa-star')

        let star_font5 = document.createElement('i')
        star_font5.setAttribute('class', 'fas fa-star-half-alt')

        small.append(star_font1, star_font2, star_font3, star_font4, star_font5)

        let div3 = document.createElement('div')
        div3.setAttribute('class', 'inner2_1_3_4_f')

        let div3_1 = document.createElement('div')
        div3_1.innerText = "₹"+protien.price
        div3_1.setAttribute('class', 'inner2_1_3_4_1_f')

        let add_to_cart_btn = document.createElement('button')
        add_to_cart_btn.setAttribute('id', 'inner2_1_3_4_2_f')

        let shop_font = document.createElement('i')
        shop_font.setAttribute('class', 'fas fa-shopping-cart')

        let div_add = document.createElement('div') 
        div_add.innerText="ADD"    
        add_to_cart_btn.style.display ="flex"
        add_to_cart_btn.setAttribute("class","add_to_cart_btn")
   

        add_to_cart_btn.append(shop_font,div_add)
        add_to_cart_btn.onclick = ()=>{
            addtoCart(protien)
            add_to_cart_btn.innerText = "CART →"

            add_to_cart_btn.onclick = ()=>{
                window.location.href ="cart.html"
            }
        }

        div3.append(div3_1, add_to_cart_btn)

        let div4 = document.createElement('div')
        div4.setAttribute('class', 'inner2_1_3_5_f')

        let div4_1 = document.createElement('div')
        div4_1.innerText = "Premium Price:"
        div4_1.setAttribute('class', 'inner2_1_3_5_1_f')

        let div4_2 = document.createElement('div')
        div4_2.innerText = protien.premium_price
        div4_2.setAttribute('class', 'inner2_1_3_5_2_f')

        div4.append(div4_1, div4_2)

        inner2_1_1_f.append(flash_sale_imgs, unit, timer)

        inner2_1_2_f.append(product_imgs)

        inner2_1_3_f.append(div1, div2, small, div3, div4)

        inner2_1_f.append(inner2_1_1_f, inner2_1_2_f, inner2_1_3_f)

        inner2_f.append(inner2_1_f)
    })





}


flashProduct(flashsale_protiens)


///     timer of product //////
const startingMinutes = 59;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('timers')
// const countdownEl = document.getElementsByClassName('timer')

setInterval(updateCountdown, 1000)


function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    // let seconds = seconds <10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `12:${minutes}:${seconds}`;
    time--;

    if (time === 0) {
        time = startingMinutes * 60
    }
}








//  slide script for multiple products

let parent = document.getElementById('inner2_f')

let trendingLeftBtn = document.getElementById('trendingLeftBtn');


let trendingRightBtn = document.getElementById('trendingRightBtn')

let leftTrending = 0;
let rightTrending = 4;

let divsTrending = document.querySelectorAll('#inner2_f>div')
console.log(divsTrending);
function trendingSlide() {
    for (let i = leftTrending; i < rightTrending; i++) {
        divsTrending[i].style.display = 'block'

    }



}
trendingSlide()


trendingRightBtn.onclick = function () {
    divsTrending[leftTrending].style.display = 'none'
    leftTrending++
    rightTrending++
    trendingSlide()

    if (leftTrending > 0) {
        trendingLeftBtn.style.display = 'block'
    }
    if (rightTrending === divsTrending.length) {
        trendingRightBtn.style.display = 'none'

    }

}

trendingLeftBtn.onclick = function () {
    leftTrending--
    rightTrending--
    divsTrending[rightTrending].style.display = 'none'

    trendingSlide()
    if (leftTrending == 0) {
        trendingLeftBtn.style.display = 'none'
    }

    if (rightTrending < divsTrending.length) {
        trendingRightBtn.style.display = 'block'
    }
}


//////////////////// flash sale //////////////////////

/////////////// trending  now ///////////

let trendingNow_protiens = [
    {

        imgProduct: "https://img10.hkrtcdn.com/12134/prd_1213319-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
        price_off: "16% off",
        name: "MuscleBlaze Biozyme Whey Protien, $.4 lbRich Chocolate",
        rating: " 4.6 (1,327)",
        price: 4999,
        premium_price: "₹4,849",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/11963/prd_1196281-MuscleTech-NitroTech-Performance-Series-4-lb-Milk-Chocolate_c_s.jpg",
        price_off: "24% off",
        name: "MuscleTech NitroTech Performance Series,4 lb Milk Chocolate",
        rating: "4.5 (576)",
        price: 4899,
        premium_price: "₹4,745",
    },
    {

        imgProduct: "https://img4.hkrtcdn.com/14378/prd_1437793-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_c_s.jpg",
        price_off: "46% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral, Amino Acids",
        rating: "  4.7 (1,547)",
        price: 499,
        premium_price: "₹364",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/14968/prd_1496701-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey ",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    },
    {

        imgProduct: "https://img6.hkrtcdn.com/12134/prd_1213315-MuscleBlaze-Whey-Performance-70-Protein-8.8-lb-Chocolate_c_s.jpg",
        price_off: "46% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral",
        rating: "  4.7 (1,547)",
        price: 499,
        premium_price: "₹364",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/14968/prd_1496701-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey ",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    },
    {

        imgProduct: "https://img4.hkrtcdn.com/14378/prd_1437793-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_c_s.jpg",
        price_off: "46% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral",
        rating: "  4.7 (1,547)",
        price: 499,
        premium_price: "₹364",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/14968/prd_1496701-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey ",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    }

]

let inner2_trendingNow = document.getElementById('inner2_trendingNow')

function trendingNow_Product(protiens) {

    protiens.forEach((protien) => {

        let inner2_1_f = document.createElement('div')
        inner2_1_f.setAttribute('class', 'inner2_1_f')
        inner2_1_f.setAttribute('id', 'inner2_1_f')



        let inner2_1_2_f = document.createElement('div')

        let product_imgs = document.createElement('img')
        product_imgs.src = protien.imgProduct
        product_imgs.setAttribute('class', 'main_img')

        let inner2_1_3_f = document.createElement('div')

        let div1 = document.createElement('div')
        let span1 = document.createElement('span')
        span1.innerText = protien.price_off
        span1.setAttribute('id', 'inner2_1_3_1_fl')

        div1.append(span1)

        let div2 = document.createElement('div')
        div2.innerText = protien.name
        span1.setAttribute('class', 'inner2_1_3_2_f')

        let small = document.createElement('small')
        small.innerText = protien.rating + '  '
        small.setAttribute('class', 'inner2_1_3_3_f')

        let star_font1 = document.createElement('i')
        star_font1.setAttribute('class', 'fas fa-star')

        let star_font2 = document.createElement('i')
        star_font2.setAttribute('class', 'fas fa-star')

        let star_font3 = document.createElement('i')
        star_font3.setAttribute('class', 'fas fa-star')

        let star_font4 = document.createElement('i')
        star_font4.setAttribute('class', 'fas fa-star')

        let star_font5 = document.createElement('i')
        star_font5.setAttribute('class', 'fas fa-star-half-alt')

        small.append(star_font1, star_font2, star_font3, star_font4, star_font5)

        let div3 = document.createElement('div')
        div3.setAttribute('class', 'inner2_1_3_4_f')

        let div3_1 = document.createElement('div')
        div3_1.innerText = "₹"+protien.price
        div3_1.setAttribute('class', 'inner2_1_3_4_1_f')

        let add_to_cart_btn = document.createElement('button')
        add_to_cart_btn.setAttribute('id', 'inner2_1_3_4_2_f')

        let shop_font = document.createElement('i')
        shop_font.setAttribute('class', 'fas fa-shopping-cart')

        let div_add = document.createElement('div') 
        div_add.innerText="ADD"    
        add_to_cart_btn.style.display ="flex"
        add_to_cart_btn.setAttribute("class","add_to_cart_btn")

        add_to_cart_btn.append(shop_font,div_add)
        add_to_cart_btn.onclick = ()=>{
            addtoCart(protien)
            add_to_cart_btn.innerText = "CART →"

            add_to_cart_btn.onclick = ()=>{
                window.location.href ="cart.html"
            }
        }

        div3.append(div3_1, add_to_cart_btn)

        let div4 = document.createElement('div')
        div4.setAttribute('class', 'inner2_1_3_5_f')

        let div4_1 = document.createElement('div')
        div4_1.innerText = "Premium Price:"
        div4_1.setAttribute('class', 'inner2_1_3_5_1_f')

        let div4_2 = document.createElement('div')
        div4_2.innerText = protien.premium_price
        div4_2.setAttribute('class', 'inner2_1_3_5_2_f')

        div4.append(div4_1, div4_2)



        inner2_1_2_f.append(product_imgs)

        inner2_1_3_f.append(div1, div2, small, div3, div4)

        inner2_1_f.append(inner2_1_2_f, inner2_1_3_f)

        inner2_trendingNow.append(inner2_1_f)
    })





}


trendingNow_Product(trendingNow_protiens)






//  slide script for multiple products

//let parent = document.getElementById('inner2_f')

let trendingLeftBtn_trendingNow = document.getElementById('trendingLeftBtn_trendingNow');


let trendingRightBtn_trendingNow = document.getElementById('trendingRightBtn_trendingNow')

let leftTrending_trendingNow = 0;
let rightTrending_trendingNow = 4;

let divsTrending_trendingNow = document.querySelectorAll('#inner2_trendingNow>div')
console.log(divsTrending_trendingNow);
function trendingSlide_trendingNow() {
    for (let i = leftTrending_trendingNow; i < rightTrending_trendingNow; i++) {
        divsTrending_trendingNow[i].style.display = 'block'

    }



}
trendingSlide_trendingNow()


trendingRightBtn_trendingNow.onclick = function () {
    divsTrending_trendingNow[leftTrending_trendingNow].style.display = 'none'
    leftTrending_trendingNow++
    rightTrending_trendingNow++
    trendingSlide_trendingNow()

    if (leftTrending_trendingNow > 0) {
        trendingLeftBtn_trendingNow.style.display = 'block'
    }
    if (rightTrending_trendingNow === divsTrending_trendingNow.length) {
        trendingRightBtn_trendingNow.style.display = 'none'

    }

}

trendingLeftBtn_trendingNow.onclick = function () {
    leftTrending_trendingNow--
    rightTrending_trendingNow--
    divsTrending_trendingNow[rightTrending_trendingNow].style.display = 'none'

    trendingSlide_trendingNow()
    if (leftTrending_trendingNow == 0) {
        trendingLeftBtn_trendingNow.style.display = 'none'
    }

    if (rightTrending_trendingNow < divsTrending_trendingNow.length) {
        trendingRightBtn_trendingNow.style.display = 'block'
    }
}




/////////////// trending  now ///////////

//////////////////trending in whey ///////////////

let trending_whey_protiens = [
    {

       imgProduct: "https://img10.hkrtcdn.com/12133/prd_1213269-MuscleBlaze-Whey-Protein-8.8-lb-Rich-Milk-Chocolate_c_s.jpg",
        price_off: "16% off",
        name: "MuscleBlaze Biozyme Whey Protien, $.4 lbRich Chocolate",
        rating: " 4.6 (1,327)",
        price: 4999,
        premium_price: "₹4,849",
    },
    {

       imgProduct: "https://img8.hkrtcdn.com/12133/prd_1213267-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Cafe-Mocha_c_s.jpg",
        price_off: "24% off",
        name: "MuscleTech NitroTech Performance Series,4 lb Milk Chocolate",
        rating: "4.5 (576)",
        price: 4899,
        premium_price: "₹4,745",
    },
    {

       imgProduct: "https://img2.hkrtcdn.com/14968/prd_1496701-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
        price_off: "46% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral, Amino Acids",
        rating: "  4.7 (1,547)",
        price: 499,
        premium_price: "₹364",
    },
    {

       imgProduct: "https://img8.hkrtcdn.com/12133/prd_1213267-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Cafe-Mocha_c_s.jpg",
        price_off: "10% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey ",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    },
    {

       imgProduct: "https://img1.hkrtcdn.com/1691/prd_169080_c_s.jpg",
        price_off: "46% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral, Amino Acids",
        rating: "  4.7 (1,547)",
        price: 499,
        premium_price: "₹364",
    },
    {

       imgProduct: "https://img2.hkrtcdn.com/12134/prd_1213301-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    },
    {

       imgProduct: "https://img4.hkrtcdn.com/14378/prd_1437793-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_c_s.jpg",
        price_off: "46% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral",
        rating: "  4.7 (1,547)",
        price: 499,
        premium_price: "₹364",
    },
    {

       imgProduct: "https://img2.hkrtcdn.com/14968/prd_1496701-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey ",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    }

]

let inner2_trending_whey = document.getElementById('inner2_trending_whey')

function trending_whey(protiens) {

    protiens.forEach((protien) => {

        let inner2_1_f = document.createElement('div')
        inner2_1_f.setAttribute('class', 'inner2_1_f')
        inner2_1_f.setAttribute('id', 'inner2_1_f')



        let inner2_1_2_f = document.createElement('div')

        let product_imgs = document.createElement('img')
        product_imgs.src = protien.imgProduct
        product_imgs.setAttribute('class', 'main_img')

        let inner2_1_3_f = document.createElement('div')

        let div1 = document.createElement('div')
        //  div1.setAttribute('class',)

        let span1 = document.createElement('span')
        span1.innerText = protien.price_off
        span1.setAttribute('id', 'inner2_1_3_1_fl')

        div1.append(span1)

        let div2 = document.createElement('div')
        div2.innerText = protien.name
        span1.setAttribute('class', 'inner2_1_3_2_f')

        let small = document.createElement('small')
        small.innerText = protien.rating + '  '
        small.setAttribute('class', 'inner2_1_3_3_f')

        let star_font1 = document.createElement('i')
        star_font1.setAttribute('class', 'fas fa-star')

        let star_font2 = document.createElement('i')
        star_font2.setAttribute('class', 'fas fa-star')

        let star_font3 = document.createElement('i')
        star_font3.setAttribute('class', 'fas fa-star')

        let star_font4 = document.createElement('i')
        star_font4.setAttribute('class', 'fas fa-star')

        let star_font5 = document.createElement('i')
        star_font5.setAttribute('class', 'fas fa-star-half-alt')

        small.append(star_font1, star_font2, star_font3, star_font4, star_font5)

        let div3 = document.createElement('div')
        div3.setAttribute('class', 'inner2_1_3_4_f')

        let div3_1 = document.createElement('div')
        div3_1.innerText = "₹"+protien.price
        div3_1.setAttribute('class', 'inner2_1_3_4_1_f')

        let add_to_cart_btn = document.createElement('button')
        add_to_cart_btn.setAttribute('id', 'inner2_1_3_4_2_f')

        let shop_font = document.createElement('i')
        shop_font.setAttribute('class', 'fas fa-shopping-cart')

        let div_add = document.createElement('div') 
        div_add.innerText="ADD"    
        add_to_cart_btn.style.display ="flex"
        add_to_cart_btn.setAttribute("class","add_to_cart_btn")

        add_to_cart_btn.append(shop_font,div_add)
        add_to_cart_btn.onclick = ()=>{
            addtoCart(protien)
            add_to_cart_btn.innerText = "CART →"

            add_to_cart_btn.onclick = ()=>{
                window.location.href ="cart.html"
            }
        }

        div3.append(div3_1, add_to_cart_btn)

        let div4 = document.createElement('div')
        div4.setAttribute('class', 'inner2_1_3_5_f')

        let div4_1 = document.createElement('div')
        div4_1.innerText = "Premium Price:"
        div4_1.setAttribute('class', 'inner2_1_3_5_1_f')

        let div4_2 = document.createElement('div')
        div4_2.innerText = protien.premium_price
        div4_2.setAttribute('class', 'inner2_1_3_5_2_f')

        div4.append(div4_1, div4_2)



        inner2_1_2_f.append(product_imgs)

        inner2_1_3_f.append(div1, div2, small, div3, div4)

        inner2_1_f.append(inner2_1_2_f, inner2_1_3_f)

        inner2_trending_whey.append(inner2_1_f)
    })





}


trending_whey(trending_whey_protiens)








//  slide script for multiple products

// let parent = document.getElementById('inner2_f')

let trendingLeftBtn_whey_protiens = document.getElementById('trendingLeftBtn_whey_protiens');


let trendingRightBtn_whey_protiens = document.getElementById('trendingRightBtn_whey_protiens')

let leftTrending_whey_protiens = 0;
let rightTrending_whey_protiens = 4;

let divsTrending_whey_protiens = document.querySelectorAll('#inner2_trending_whey>div')
console.log(divsTrending_whey_protiens);
function trendingSlide_whey_protiens() {
    for (let i = leftTrending_whey_protiens; i < rightTrending_whey_protiens; i++) {
        divsTrending_whey_protiens[i].style.display = 'block'

    }



}
trendingSlide_whey_protiens()


trendingRightBtn_whey_protiens.onclick = function () {
    divsTrending_whey_protiens[leftTrending_whey_protiens].style.display = 'none'
    leftTrending_whey_protiens++
    rightTrending_whey_protiens++
    trendingSlide_whey_protiens()

    if (leftTrending_whey_protiens > 0) {
        trendingLeftBtn_whey_protiens.style.display = 'block'
    }
    if (rightTrending_whey_protiens === divsTrending_whey_protiens.length) {
        trendingRightBtn_whey_protiens.style.display = 'none'

    }

}

trendingLeftBtn_whey_protiens.onclick = function () {
    leftTrending_whey_protiens--
    rightTrending_whey_protiens--
    divsTrending_whey_protiens[rightTrending_whey_protiens].style.display = 'none'

    trendingSlide_whey_protiens()
    if (leftTrending_whey_protiens == 0) {
        trendingLeftBtn_whey_protiens.style.display = 'none'
    }

    if (rightTrending_whey_protiens < divsTrending_whey_protiens.length) {
        trendingRightBtn_whey_protiens_whey_protiens.style.display = 'block'
    }
}




///////////////// trending in whey ////////////////






///////////////// trending in Mass Gainer //////////////

let trending_in_massGainer_protiens = [
    {

        imgProduct: "https://img10.hkrtcdn.com/9679/prd_967839_c_s.jpg",
        price_off: "16% off",
        name: "MuscleBlaze BOld Gainer XXL, $.4 lbRich Chocolate",
        rating: " 4.6 (1,327)",
        price: 3999,
        premium_price: "₹3,849",
    },
    {

        imgProduct: "https://img8.hkrtcdn.com/6173/prd_617297-Labrada-Muscle-Mass-Gainer-6-lb-Chocolate_c_s.jpg",
        price_off: "14% off",
        name: "Labrada Muscle Mass Gainer Series,4 lb Milk Chocolate",
        rating: "4.5 (576)",
        price: 3399,
        premium_price: "₹3,345",
    },
    {

        imgProduct: "https://img10.hkrtcdn.com/12080/prd_1207919-MuscleBlaze-Mass-Gainer-XXL-6.6-lb-Chocolate_c_s.jpg",
        price_off: "46% off",
        name: "MuscleBlazer Mass Gainer XXL, 6 lb ",
        rating: "  4.7 (1,547)",
        price: 5499,
        premium_price: "₹5,364",
    },
    {

        imgProduct: "https://img4.hkrtcdn.com/11957/prd_1195643-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "MuscleBlazer super  Mass Gainer XXL, 11 lb ",
        rating: " 4.5 (547)",
        price: 3599,
        premium_price: "₹3,499",
    },
    {

        imgProduct: "https://img10.hkrtcdn.com/2377/prd_237659_c_s.jpg",
        price_off: "26% off",
        name: "HealthKart HK Vitals Multivitamin with Multiminiral",
        rating: "  4.7 (1,547)",
        price: 1499,
        premium_price: "₹1364",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/12134/prd_1213301-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "Dynamite Super Mass Gainer ,6 lb Rich Chocolate",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    },
    {

        imgProduct: "https://img4.hkrtcdn.com/14378/prd_1437793-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_c_s.jpg",
        price_off: "46% off",
        name: " muscleBlazer High Protien with Multiminiral",
        rating: "  4.7 (1,547)",
        price: 5499,
        premium_price: "₹4,364",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/14968/prd_1496701-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: " Gold Standard 100% Whey Protien,5 lb Double Rich",
        rating: " 4.5 (547)",
        price: 6599,
        premium_price: "₹6,499",
    }

]

let inner2_trending_in_massGainer = document.getElementById('inner2_trending_in_massGainer')

function trending_in_massGainer_Product(protiens) {

    protiens.forEach((protien) => {

        let inner2_1_f = document.createElement('div')
        inner2_1_f.setAttribute('class', 'inner2_1_f')
        inner2_1_f.setAttribute('id', 'inner2_1_f')



        let inner2_1_2_f = document.createElement('div')

        let product_imgs = document.createElement('img')
        product_imgs.src = protien.imgProduct
        product_imgs.setAttribute('class', 'main_img')

        let inner2_1_3_f = document.createElement('div')

        let div1 = document.createElement('div')
        let span1 = document.createElement('span')
        span1.innerText = protien.price_off
        span1.setAttribute('id', 'inner2_1_3_1_fl')

        div1.append(span1)

        let div2 = document.createElement('div')
        div2.innerText = protien.name
        span1.setAttribute('class', 'inner2_1_3_2_f')

        let small = document.createElement('small')
        small.innerText = protien.rating + '  '
        small.setAttribute('class', 'inner2_1_3_3_f')

        let star_font1 = document.createElement('i')
        star_font1.setAttribute('class', 'fas fa-star')

        let star_font2 = document.createElement('i')
        star_font2.setAttribute('class', 'fas fa-star')

        let star_font3 = document.createElement('i')
        star_font3.setAttribute('class', 'fas fa-star')

        let star_font4 = document.createElement('i')
        star_font4.setAttribute('class', 'fas fa-star')

        let star_font5 = document.createElement('i')
        star_font5.setAttribute('class', 'fas fa-star-half-alt')

        small.append(star_font1, star_font2, star_font3, star_font4, star_font5)

        let div3 = document.createElement('div')
        div3.setAttribute('class', 'inner2_1_3_4_f')

        let div3_1 = document.createElement('div')
        div3_1.innerText = "₹"+protien.price
        div3_1.setAttribute('class', 'inner2_1_3_4_1_f')

        let add_to_cart_btn = document.createElement('button')
        add_to_cart_btn.setAttribute('id', 'inner2_1_3_4_2_f')

        let shop_font = document.createElement('i')
        shop_font.setAttribute('class', 'fas fa-shopping-cart')

        let div_add = document.createElement('div') 
        div_add.innerText="ADD"    
        add_to_cart_btn.style.display ="flex"
        add_to_cart_btn.setAttribute("class","add_to_cart_btn")

        add_to_cart_btn.append(shop_font,div_add)
        add_to_cart_btn.onclick = ()=>{
            addtoCart(protien)
            add_to_cart_btn.innerText = "CART →"

            add_to_cart_btn.onclick = ()=>{
                window.location.href ="cart.html"
            }
        }

        div3.append(div3_1, add_to_cart_btn)

        let div4 = document.createElement('div')
        div4.setAttribute('class', 'inner2_1_3_5_f')

        let div4_1 = document.createElement('div')
        div4_1.innerText = "Premium Price:"
        div4_1.setAttribute('class', 'inner2_1_3_5_1_f')

        let div4_2 = document.createElement('div')
        div4_2.innerText = protien.premium_price
        div4_2.setAttribute('class', 'inner2_1_3_5_2_f')

        div4.append(div4_1, div4_2)



        inner2_1_2_f.append(product_imgs)

        inner2_1_3_f.append(div1, div2, small, div3, div4)

        inner2_1_f.append(inner2_1_2_f, inner2_1_3_f)

        inner2_trending_in_massGainer.append(inner2_1_f)
    })





}


trending_in_massGainer_Product(trending_in_massGainer_protiens)









//  slide script for multiple products



let trendingLeftBtn_trending_in_massGainer = document.getElementById('trendingLeftBtn_trending_in_massGainer');


let trendingRightBtn_trending_in_massGainer = document.getElementById('trendingRightBtn_trending_in_massGainer')

let leftTrending_trending_in_massGainer = 0;
let rightTrending_trending_in_massGainer = 4;

let divsTrending_trending_in_massGainer = document.querySelectorAll('#inner2_trending_in_massGainer>div')
console.log(divsTrending_trending_in_massGainer);
function trendingSlide_trending_in_massGainer() {
    for (let i = leftTrending_trending_in_massGainer; i < rightTrending_trending_in_massGainer; i++) {
        divsTrending_trending_in_massGainer[i].style.display = 'block'

    }



}
trendingSlide_trending_in_massGainer()


trendingRightBtn_trending_in_massGainer.onclick = function () {
    divsTrending_trending_in_massGainer[leftTrending_trending_in_massGainer].style.display = 'none'
    leftTrending_trending_in_massGainer++
    rightTrending_trending_in_massGainer++
    trendingSlide_trending_in_massGainer()

    if (leftTrending_trending_in_massGainer > 0) {
        trendingLeftBtn_trending_in_massGainer.style.display = 'block'
    }
    if (rightTrending_trending_in_massGainer === divsTrending_trending_in_massGainer.length) {
        trendingRightBtn_trending_in_massGainer.style.display = 'none'

    }

}

trendingLeftBtn_trending_in_massGainer.onclick = function () {
    leftTrending_trending_in_massGainer--
    rightTrending_trending_in_massGainer--
    divsTrending_trending_in_massGainer[rightTrending_trending_in_massGainer].style.display = 'none'

    trendingSlide_trending_in_massGainer()
    if (leftTrending_trending_in_massGainer == 0) {
        trendingLeftBtn_trending_in_massGainer.style.display = 'none'
    }

    if (rightTrending_trending_in_massGainer < divsTrending_trending_in_massGainer.length) {
        trendingRightBtn_trending_in_massGainer.style.display = 'block'
    }
}


///////////////// trending in Mass Gainer //////////////


///////////////////  trending in premium supliment //////////


let trending_premium_protiens = [
    {

        imgProduct: "https://img8.hkrtcdn.com/11795/prd_1179417-TrueBasics-Ultra-Omega3-Fatty-Acids-Triple-Strength-with-1250mg-Fish-oil-EPA-460-mg-DHA-380-mg-90-capsules_c_s.jpg",
        price_off: "16% off",
        name: "MuscleBlaze Biozyme Whey Protien, $.4 lbRich Chocolate",
        rating: " 4.6 (1,327)",
        price: 4999,
        premium_price: "₹4,849",
    },
    {

        imgProduct: "https://img8.hkrtcdn.com/12133/prd_1213267-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Cafe-Mocha_c_s.jpg",
        price_off: "10% off",
        name: "TrueBasics Ultra Omega-3(EPA 525mg & DHA 400mg),90 capsules",
        rating: "4.5 (9,576)",
        price: 1599,
        premium_price: "₹1,445",
    },
    {

        imgProduct: "https://img4.hkrtcdn.com/6865/prd_686463-TrueBasics-Multivit-Sport-90-tablets-Unflavoured_c_s.jpg",
        price_off: "10% off",
        name: "TrueBasics MUltivit Sport one Daily Multivitamins ,90 tablets",
        rating: "  4.7 (1,547)",
        price: 1499,
        premium_price: "₹1,364",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/7691/prd_769051-TrueBasics-Advanced-Calcium-90-tablets-Unflavoured_c_s.jpg",
        price_off: "10% off",
        name: "TrueBasic Multivit Sport One Daily Multivitamin,90 tablets",
        rating: " 4.5 (547)",
        price: 1599,
        premium_price: "₹1,499",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/7694/prd_769311-TrueBasics-Joint-Gold-with-1500mg-of-Glucosamine-1200mg-of-Chondroitin-90-tablets_c_s.jpg",
        price_off: "10% off",
        name: "TrueBasics Advance Calcium Vitamin D3 & K2MK7,90 tablets",
        rating: "  4.7 (1,547)",
        price: 899,
        premium_price: "₹764",
    },
    {

        imgProduct: "https://img6.hkrtcdn.com/9597/prd_959655-TrueBasics-Liver-Detox-90-tablets_c_s.jpg",
        price_off: "10% off",
        name: "TrueBasics Ashwagandha with 600 mg of KSM-66",
        rating: " 4.5 (547)",
        price: 899,
        premium_price: "₹599",
    },
    {

        imgProduct: "https://img8.hkrtcdn.com/7953/prd_795247-TrueBasics-UC-II-Collagen-30-capsules_c_s.jpg",
        price_off: "10% off",
        name: "TrueBasics Vegan Omega 3 6 9",
        rating: "  4.7 (1,547)",
        price: 1499,
        premium_price: "₹1364",
    },
    {

        imgProduct: "https://img10.hkrtcdn.com/10574/prd_1057329-TrueBasics-Vegan-Omega-870mg-of-Vegetarian-Omega-Fatty-Acids-90-softgels_c_s.jpg",
        price_off: "10% off",
        name: "TrueBasics Liver with Silybin milk Thirstle Exact",
        rating: " 4.5 (547)",
        price: 1599,
        premium_price: "₹1,499",
    }

]

let inner2_trending_premium = document.getElementById('inner2_trending_premium')

function trending_premium_Product(protiens) {

    protiens.forEach((protien) => {

        let inner2_1_f = document.createElement('div')
        inner2_1_f.setAttribute('class', 'inner2_1_f')
        inner2_1_f.setAttribute('id', 'inner2_1_f')



        let inner2_1_2_f = document.createElement('div')

        let product_imgs = document.createElement('img')
        product_imgs.src = protien.imgProduct
        product_imgs.setAttribute('class', 'main_img')

        let inner2_1_3_f = document.createElement('div')

        let div1 = document.createElement('div')
        let span1 = document.createElement('span')
        span1.innerText = protien.price_off
        span1.setAttribute('id', 'inner2_1_3_1_fl')

        div1.append(span1)

        let div2 = document.createElement('div')
        div2.innerText = protien.name
        span1.setAttribute('class', 'inner2_1_3_2_f')

        let small = document.createElement('small')
        small.innerText = protien.rating + '  '
        small.setAttribute('class', 'inner2_1_3_3_f')

        let star_font1 = document.createElement('i')
        star_font1.setAttribute('class', 'fas fa-star')

        let star_font2 = document.createElement('i')
        star_font2.setAttribute('class', 'fas fa-star')

        let star_font3 = document.createElement('i')
        star_font3.setAttribute('class', 'fas fa-star')

        let star_font4 = document.createElement('i')
        star_font4.setAttribute('class', 'fas fa-star')

        let star_font5 = document.createElement('i')
        star_font5.setAttribute('class', 'fas fa-star-half-alt')

        small.append(star_font1, star_font2, star_font3, star_font4, star_font5)

        let div3 = document.createElement('div')
        div3.setAttribute('class', 'inner2_1_3_4_f')

        let div3_1 = document.createElement('div')
        div3_1.innerText = "₹"+protien.price
        div3_1.setAttribute('class', 'inner2_1_3_4_1_f')

        let add_to_cart_btn = document.createElement('button')
        add_to_cart_btn.setAttribute('id', 'inner2_1_3_4_2_f')

        let shop_font = document.createElement('i')
        shop_font.setAttribute('class', 'fas fa-shopping-cart')

        let div_add = document.createElement('div') 
        div_add.innerText="ADD"    
        add_to_cart_btn.style.display ="flex"
        add_to_cart_btn.setAttribute("class","add_to_cart_btn")

        add_to_cart_btn.append(shop_font,div_add)
        add_to_cart_btn.onclick = ()=>{
            addtoCart(protien)
            add_to_cart_btn.innerText = "CART →"

            add_to_cart_btn.onclick = ()=>{
                window.location.href ="cart.html"
            }
        }

        div3.append(div3_1, add_to_cart_btn)

        let div4 = document.createElement('div')
        div4.setAttribute('class', 'inner2_1_3_5_f')

        let div4_1 = document.createElement('div')
        div4_1.innerText = "Premium Price:"
        div4_1.setAttribute('class', 'inner2_1_3_5_1_f')

        let div4_2 = document.createElement('div')
        div4_2.innerText = protien.premium_price
        div4_2.setAttribute('class', 'inner2_1_3_5_2_f')

        div4.append(div4_1, div4_2)



        inner2_1_2_f.append(product_imgs)

        inner2_1_3_f.append(div1, div2, small, div3, div4)

        inner2_1_f.append(inner2_1_2_f, inner2_1_3_f)

        inner2_trending_premium.append(inner2_1_f)
    })





}


trending_premium_Product(trending_premium_protiens)








//  slide script for multiple products


let trendingLeftBtn_trending_premium = document.getElementById('trendingLeftBtn_trending_premium');


let trendingRightBtn_trending_premium = document.getElementById('trendingRightBtn_trending_premium')

let leftTrending_trending_premium = 0;
let rightTrending_trending_premium = 4;

let divsTrending_trending_premium = document.querySelectorAll('#inner2_trending_premium>div')
console.log(divsTrending_trending_premium);
function trending_premium() {
    for (let i = leftTrending_trending_premium; i < rightTrending_trending_premium; i++) {
        divsTrending_trending_premium[i].style.display = 'block'

    }



}
trending_premium()


trendingRightBtn_trending_premium.onclick = function () {
    divsTrending_trending_premium[leftTrending_trending_premium].style.display = 'none'
    leftTrending_trending_premium++
    rightTrending_trending_premium++
    trending_premium()

    if (leftTrending_trending_premium > 0) {
        trendingLeftBtn_trending_premium.style.display = 'block'
    }
    if (rightTrending_trending_premium === divsTrending_trending_premium.length) {
        trendingRightBtn_trending_premium.style.display = 'none'

    }

}

trendingLeftBtn_trending_premium.onclick = function () {
    leftTrending_trending_premium--
    rightTrending_trending_premium--
    divsTrending_trending_premium[rightTrending_trending_premium].style.display = 'none'

    trending_premium()
    if (leftTrending_trending_premium == 0) {
        trendingLeftBtn_trending_premium.style.display = 'none'
    }

    if (rightTrending_trending_premium < divsTrending_trending_premium.length) {
        trendingRightBtn_trending_premium.style.display = 'block'
    }
}

///////////////////  trending in premium supliment //////////


/////////////////////   just Launched /////////////////

let just_Lanch_protiens = [
    {

        imgProduct: "https://img3.hkrtcdn.com/16537/prd_1653642-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Kesar-Thandai_c_s.jpg",
        price_off: "19% off",
        name: "MuscleBlaze Biozyme Whey Protien, $.4 lbRich Chocolate",
        rating: " 4.5 (1,327)",
        price: 3999,
        premium_price: "₹4,849",
    },
    {

        imgProduct: "https://img9.hkrtcdn.com/16151/prd_1615078-MuscleBlaze-Biozyme-Performance-Whey-8.8-lb-Rich-Chocolate_c_s.jpg",
        price_off: "16% off",
        name: "MuscleTech BIozyme Performance Whey,4 lb Milk Chocolate",
        rating: "4.5 (576)",
        price: 7499,
        premium_price: "₹7,245",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/14637/prd_1463611-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Chocolate-Hazelnut_c_s.jpg",
        price_off: "19% off",
        name: "MuscleBlaze Biozyme  Multivitamin with Multiminiral",
        rating: "  4.5 (1,547)",
        price: 3999,
        premium_price: "₹3864",
    },
    {

        imgProduct: "https://img8.hkrtcdn.com/14207/prd_1420687-MuscleBlaze-Biozyme-Performance-Whey-2.2-lb-Rich-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "MuscleBlaze Biozyme Performance Whey Protien",
        rating: " 4.5 (5,547)",
        price: 2199,
        premium_price: "₹2,000",
    },
    {

        imgProduct: "https://img4.hkrtcdn.com/13528/prd_1352733_c_s.jpg",
        price_off: "13% off",
        name: "MuscleBlaze Raw Whey Isolate,with Amino Acids",
        rating: "  4.7 (1,547)",
        price: 1899,
        premium_price: "₹1,764",
    },
    {

        imgProduct: "https://img6.hkrtcdn.com/14889/prd_1488805-MB-Fuel-One-Whey-Protein-Immunity-8.8-lb-Chocolate_c_s.jpg",
        price_off: "10% off",
        name: "MB Fuel One Whey Protien Immunity+,8 lb",
        rating: " 4.5 (547)",
        price: 6499,
        premium_price: "₹6,299",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/14645/prd_1464451-MuscleBlaze-Raw-Whey-Isolate-4.4-lb-Unflavoured_c_s.jpg",
        price_off: "11% off",
        name: "MuscleBlaze Raw Whey Isolate,4.4 lb ",
        rating: "  4.7 (1,547)",
        price: 3499,
        premium_price: "₹3364",
    },
    {

        imgProduct: "https://img2.hkrtcdn.com/13488/prd_1348781-MB-Fuel-One-Whey-Protein-Immunity-2.2-lb-Chocolate_c_s.jpg",
        price_off: "15% off",
        name: "ON(Optimum Nutrition) Gold Standard 100% Whey",
        rating: " 4.5 (547)",
        price: 1599,
        premium_price: "₹1,499",
    }

]

let inner2_just_Lanch = document.getElementById('inner2_just_Lanch')

function just_Lanch_Product(protiens) {

    protiens.forEach((protien) => {

        let inner2_1_f = document.createElement('div')
        inner2_1_f.setAttribute('class', 'inner2_1_f')
        inner2_1_f.setAttribute('id', 'inner2_1_f')



        let inner2_1_2_f = document.createElement('div')

        let product_imgs = document.createElement('img')
        product_imgs.src = protien.imgProduct
        product_imgs.setAttribute('class', 'main_img')

        let inner2_1_3_f = document.createElement('div')

        let div1 = document.createElement('div')
        let span1 = document.createElement('span')
        span1.innerText = protien.price_off
        span1.setAttribute('id', 'inner2_1_3_1_fl')

        div1.append(span1)

        let div2 = document.createElement('div')
        div2.innerText = protien.name
        span1.setAttribute('class', 'inner2_1_3_2_f')

        let small = document.createElement('small')
        small.innerText = protien.rating + '  '
        small.setAttribute('class', 'inner2_1_3_3_f')

        let star_font1 = document.createElement('i')
        star_font1.setAttribute('class', 'fas fa-star')

        let star_font2 = document.createElement('i')
        star_font2.setAttribute('class', 'fas fa-star')

        let star_font3 = document.createElement('i')
        star_font3.setAttribute('class', 'fas fa-star')

        let star_font4 = document.createElement('i')
        star_font4.setAttribute('class', 'fas fa-star')

        let star_font5 = document.createElement('i')
        star_font5.setAttribute('class', 'fas fa-star-half-alt')

        small.append(star_font1, star_font2, star_font3, star_font4, star_font5)

        let div3 = document.createElement('div')
        div3.setAttribute('class', 'inner2_1_3_4_f')

        let div3_1 = document.createElement('div')
        div3_1.innerText = "₹"+protien.price
        div3_1.setAttribute('class', 'inner2_1_3_4_1_f')

        let add_to_cart_btn = document.createElement('button')
        add_to_cart_btn.setAttribute('id', 'inner2_1_3_4_2_f')

        let shop_font = document.createElement('i')
        shop_font.setAttribute('class', 'fas fa-shopping-cart')

        let div_add = document.createElement('div') 
        div_add.innerText="ADD"    
        add_to_cart_btn.style.display ="flex"
        add_to_cart_btn.setAttribute("class","add_to_cart_btn")


        add_to_cart_btn.append(shop_font,div_add)
        add_to_cart_btn.onclick = ()=>{
            addtoCart(protien)
            
            add_to_cart_btn.innerText = "CART →"

            add_to_cart_btn.onclick = ()=>{
                window.location.href ="cart.html"
            }
        }

        div3.append(div3_1, add_to_cart_btn)

        let div4 = document.createElement('div')
        div4.setAttribute('class', 'inner2_1_3_5_f')

        let div4_1 = document.createElement('div')
        div4_1.innerText = "Premium Price:"
        div4_1.setAttribute('class', 'inner2_1_3_5_1_f')

        let div4_2 = document.createElement('div')
        div4_2.innerText = protien.premium_price
        div4_2.setAttribute('class', 'inner2_1_3_5_2_f')

        div4.append(div4_1, div4_2)



        inner2_1_2_f.append(product_imgs)

        inner2_1_3_f.append(div1, div2, small, div3, div4)

        inner2_1_f.append(inner2_1_2_f, inner2_1_3_f)

        inner2_just_Lanch.append(inner2_1_f)
    })





}


just_Lanch_Product(just_Lanch_protiens)




let trendingLeftBtn_just_Lanch = document.getElementById('trendingLeftBtn_just_Lanch');


let trendingRightBtn_just_Lanch = document.getElementById('trendingRightBtn_just_Lanch')

let leftTrending_just_Lanch = 0;
let rightTrending_just_Lanch = 4;

let divsTrending_just_Lanch = document.querySelectorAll('#inner2_just_Lanch>div')
console.log(divsTrending_just_Lanch);
function just_Lanch() {
    for (let i = leftTrending_just_Lanch; i < rightTrending_just_Lanch; i++) {
        divsTrending_just_Lanch[i].style.display = 'block'

    }



}
just_Lanch()


trendingRightBtn_just_Lanch.onclick = function () {
    divsTrending_just_Lanch[leftTrending_just_Lanch].style.display = 'none'
    leftTrending_just_Lanch++
    rightTrending_just_Lanch++
    just_Lanch()

    if (leftTrending_just_Lanch > 0) {
        trendingLeftBtn_just_Lanch.style.display = 'block'
    }
    if (rightTrending_just_Lanch === divsTrending_just_Lanch.length) {
        trendingRightBtn_just_Lanch.style.display = 'none'

    }

}

trendingLeftBtn_just_Lanch.onclick = function () {
    leftTrending_just_Lanch--
    rightTrending_just_Lanch--
    divsTrending_just_Lanch[rightTrending_just_Lanch].style.display = 'none'

    just_Lanch()
    if (leftTrending_just_Lanch == 0) {
        trendingLeftBtn_just_Lanch.style.display = 'none'
    }

    if (rightTrending_just_Lanch < divsTrending_just_Lanch.length) {
        trendingRightBtn_just_Lanch.style.display = 'block'
    }
}



/////////////////////   just Launched /////////////////

////////////////  popular in weight ////////////////


let popular_in_weights = [
    {
        img: "https://img6.hkrtcdn.com/6542/bnr_654165_o.png",
        name: "Meal Replacement",
    },
    {
        img: "https://img6.hkrtcdn.com/9523/bnr_952235_o.png",
        name: "Energy Drinks",
    },
    {
        img: "https://img8.hkrtcdn.com/4045/bnr_404407_o.png",
        name: "Green coffee Bean Extract",
    },
    {
        img: "https://img4.hkrtcdn.com/6543/bnr_654213_o.png",
        name: "Garcinia Cambogia",
    },
    {
        img: "https://img10.hkrtcdn.com/6543/bnr_654229_o.png",
        name: "Fat Loss Supplements",
    },
    {
        img: "https://img6.hkrtcdn.com/9523/bnr_952235_o.png",
        name: "Energy Drinks",
    },
    {
        img: "https://img8.hkrtcdn.com/4045/bnr_404407_o.png",
        name: "Green coffee Bean Extract",
    },
    {
        img: "https://img4.hkrtcdn.com/6543/bnr_654213_o.png",
        name: "Garcinia Cambogia",
    },
    {
        img: "https://img6.hkrtcdn.com/6542/bnr_654165_o.png",
        name: "Meal Replacement",
    },
]

let inner2_1_popular_in_weight = document.getElementById('inner2_1_popular_in_weight')
function show_popular_in_weight(products) {

    products.forEach((product) => {

        let divmain = document.createElement('div')
        divmain.setAttribute('class', 'hide')

        let img = document.createElement('img')
        img.src = product.img
        img.setAttribute('class', 'img1_pop')

        let div1 = document.createElement('div')
        div1.innerText = product.name
        div1.setAttribute('class', 'p_pop')

        divmain.append(img, div1)


        //  let div2 =document.createElement('div')
        // div2.setAttribute('class','B_pop')

        inner2_1_popular_in_weight.append(divmain)

    })
}
show_popular_in_weight(popular_in_weights)


/// 


//  slide script for multiple products



let trendingLeftBtn_popular_in_weight = document.getElementById('trendingLeftBtn_popular_in_weight');


let trendingRightBtn_popular_in_weight = document.getElementById('trendingRightBtn_popular_in_weight')

let leftTrending_popular_in_weight = 0;
let rightTrending_popular_in_weight = 4;

let divsTrending_popular_in_weight = document.querySelectorAll('#inner2_1_popular_in_weight>div')
console.log(divsTrending_popular_in_weight);
function popular_in_weight() {
    for (let i = leftTrending_popular_in_weight; i < rightTrending_popular_in_weight; i++) {
        divsTrending_popular_in_weight[i].style.display = 'block'

    }



}
popular_in_weight()


trendingRightBtn_popular_in_weight.onclick = function () {
    divsTrending_popular_in_weight[leftTrending_popular_in_weight].style.display = 'none'
    leftTrending_popular_in_weight++
    rightTrending_popular_in_weight++
    popular_in_weight()

    if (leftTrending_popular_in_weight > 0) {
        trendingLeftBtn_popular_in_weight.style.display = 'block'
    }
    if (rightTrending_popular_in_weight === divsTrending_popular_in_weight.length) {
        trendingRightBtn_popular_in_weight.style.display = 'none'

    }

}

trendingLeftBtn_popular_in_weight.onclick = function () {
    leftTrending_popular_in_weight--
    rightTrending_popular_in_weight--
    divsTrending_popular_in_weight[rightTrending_popular_in_weight].style.display = 'none'

    popular_in_weight()
    if (leftTrending_popular_in_weight == 0) {
        trendingLeftBtn_popular_in_weight.style.display = 'none'
    }

    if (rightTrending_popular_in_weight < divsTrending_popular_in_weight.length) {
        trendingRightBtn_popular_in_weight.style.display = 'block'
    }
}


////////////////  popular in weight ////////////////


//////////////  popular in fitness ///////////////

let popular_in_Fitness = [
    {
        img: "https://img2.hkrtcdn.com/3802/bnr_380131_o.png",
        name: "Gym Essentials",
    },
    {
        img: "https://img2.hkrtcdn.com/3801/bnr_380091_o.png",
        name: "Fitness Equipment",
    },
    {
        img: "https://img6.hkrtcdn.com/3802/bnr_380125_o.png",
        name: "Gym Accessories",
    },
    {
        img: "https://img10.hkrtcdn.com/3802/bnr_380129_o.png",
        name: "Gym Supports",
    },

]


let inner2_1_popular_in_fitness = document.getElementById('inner2_1_popular_in_fitness')
function popular_in_Fitnes(products) {

    products.forEach((product) => {

        let divmain = document.createElement('div')

        let img = document.createElement('img')
        img.src = product.img
        img.setAttribute('class', 'img1_pop')

        let div1 = document.createElement('div')
        div1.innerText = product.name
        div1.setAttribute('class', 'p_pop')

        divmain.append(img, div1)


        let div2 = document.createElement('div')
        div2.setAttribute('class', 'B_pop')

        inner2_1_popular_in_fitness.append(divmain, div2)

    })
}
popular_in_Fitnes(popular_in_Fitness)





//////////////// popular in fitness ////////////


//////////////// popular in sports ///////////

let popular_in_sports_nutrition = [
    {
        img: "https://img2.hkrtcdn.com/6544/bnr_654341_o.png",
        name: "Whey Protiens",
    },
    {
        img: "https://img6.hkrtcdn.com/6544/bnr_654345_o.png",
        name: "Whey Protein Isolate",
    },
    {
        img: "https://img4.hkrtcdn.com/6544/bnr_654343_o.png",
        name: "Mass Gainers",
    },
    {
        img: "https://img8.hkrtcdn.com/6544/bnr_654347_o.png",
        name: "Amino Acids",
    },
    {
        img: "https://img10.hkrtcdn.com/6544/bnr_654349_o.png",
        name: "Pre-Workout",
    },
    {
        img: "https://img6.hkrtcdn.com/6544/bnr_654345_o.png",
        name: "Whey Protein Isolate",
    },
    {
        img: "https://img8.hkrtcdn.com/6544/bnr_654347_o.png",
        name: "Amino Acids",
    },
    {
        img: "https://img2.hkrtcdn.com/6544/bnr_654341_o.png",
        name: "Whey Protiens",
    },
]


let inner2_1_popular_for_sport = document.getElementById('inner2_1_popular_for_sport')
function popular_in_sports_nutritions(products) {

    products.forEach((product) => {

        let divmain = document.createElement('div')
        divmain.setAttribute('class', 'hide')

        let img = document.createElement('img')
        img.src = product.img
        img.setAttribute('class', 'img1_pop')

        let div1 = document.createElement('div')
        div1.innerText = product.name
        div1.setAttribute('class', 'p_pop')

        divmain.append(img, div1)


        // let div2 =document.createElement('div')
        //  div2.setAttribute('class','B_pop')

        inner2_1_popular_for_sport.append(divmain)

    })
}
popular_in_sports_nutritions(popular_in_sports_nutrition)





//  slide script for multiple products


let trendingLeftBtn_popular_for_sport = document.getElementById('trendingLeftBtn_popular_for_sport');


let trendingRightBtn_popular_for_sport = document.getElementById('trendingRightBtn_popular_for_sport')

let leftTrending_popular_for_sport = 0;
let rightTrending_popular_for_sport = 4;

let divsTrending_popular_for_sport = document.querySelectorAll('#inner2_1_popular_for_sport>div')
console.log(divsTrending_popular_for_sport);
function popular_for_sport() {
    for (let i = leftTrending_popular_for_sport; i < rightTrending_popular_for_sport; i++) {
        divsTrending_popular_for_sport[i].style.display = 'block'

    }



}
popular_for_sport()


trendingRightBtn_popular_for_sport.onclick = function () {
    divsTrending_popular_for_sport[leftTrending_popular_for_sport].style.display = 'none'
    leftTrending_popular_for_sport++
    rightTrending_popular_for_sport++
    popular_for_sport()

    if (leftTrending_popular_for_sport > 0) {
        trendingLeftBtn_popular_for_sport.style.display = 'block'
    }
    if (rightTrending_popular_for_sport === divsTrending_popular_for_sport.length) {
        trendingRightBtn_popular_for_sport.style.display = 'none'

    }

}

trendingLeftBtn_popular_for_sport.onclick = function () {
    leftTrending_popular_for_sport--
    rightTrending_popular_for_sport--
    divsTrending_popular_for_sport[rightTrending_popular_for_sport].style.display = 'none'

    popular_for_sport()
    if (leftTrending_popular_for_sport == 0) {
        trendingLeftBtn_popular_for_sport.style.display = 'none'
    }

    if (rightTrending_popular_for_sport < divsTrending_popular_for_sport.length) {
        trendingRightBtn_popular_for_sport.style.display = 'block'
    }
}


//////////////// popular in sports ///////////


///////////////////// popular in health ///////


let popular_in_Health_Foods_Drinks = [
    {
        img: "https://img2.hkrtcdn.com/6543/bnr_654291_o.png",
        name: "Apple Cider Vinegar",
    },
    {
        img: "https://img4.hkrtcdn.com/6543/bnr_654293_o.png",
        name: "Peanut Butter",
    },
    {
        img: "https://img2.hkrtcdn.com/6544/bnr_654301_o.png",
        name: "Protien Bars",
    },
    {
        img: "https://img10.hkrtcdn.com/6543/bnr_654299_o.png",
        name: "Cereals",
    },
    {
        img: "https://img6.hkrtcdn.com/6543/bnr_654295_o.png",
        name: "Nutrition for Children",
    },
    {
        img: "https://img8.hkrtcdn.com/9523/bnr_952247_o.png",
        name: "Protien Shake",
    },
    {
        img: "https://img8.hkrtcdn.com/4044/bnr_404387_o.png",
        name: "Pressed Oil",
    },
]

let inner2_1_popular_in_health = document.getElementById('inner2_1_popular_in_health')
function popular_in_Health_Foods_Drink(products) {

    products.forEach((product) => {

        let divmain = document.createElement('div')
        divmain.setAttribute('class', 'hide')

        let img = document.createElement('img')
        img.src = product.img
        img.setAttribute('class', 'img1_pop')

        let div1 = document.createElement('div')
        div1.innerText = product.name
        div1.setAttribute('class', 'p_pop')

        divmain.append(img, div1)


        // let div2 =document.createElement('div')
        //  div2.setAttribute('class','B_pop')

        inner2_1_popular_in_health.append(divmain)

    })
}
popular_in_Health_Foods_Drink(popular_in_Health_Foods_Drinks)


/**/


//  slide script for multiple products



let trendingLeftBtn_popular_in_health = document.getElementById('trendingLeftBtn_popular_in_health');


let trendingRightBtn_popular_in_health = document.getElementById('trendingRightBtn_popular_in_health')

let leftTrending_popular_in_health = 0;
let rightTrending_popular_in_health = 4;

let divsTrending_popular_in_health = document.querySelectorAll('#inner2_1_popular_in_health>div')
console.log(divsTrending_popular_in_health);
function Health_Foods_Drink() {
    for (let i = leftTrending_popular_in_health; i < rightTrending_popular_in_health; i++) {
        divsTrending_popular_in_health[i].style.display = 'block'

    }



}
Health_Foods_Drink()


trendingRightBtn_popular_in_health.onclick = function () {
    divsTrending_popular_in_health[leftTrending_popular_in_health].style.display = 'none'
    leftTrending_popular_in_health++
    rightTrending_popular_in_health++
    Health_Foods_Drink()

    if (leftTrending_popular_in_health > 0) {
        trendingLeftBtn_popular_in_health.style.display = 'block'
    }
    if (rightTrending_popular_in_health === divsTrending_popular_in_health.length) {
        trendingRightBtn_popular_in_health.style.display = 'none'

    }

}

trendingLeftBtn_popular_in_health.onclick = function () {
    leftTrending_popular_in_health--
    rightTrending_popular_in_health--
    divsTrending_popular_in_health[rightTrending_popular_in_health].style.display = 'none'

    Health_Foods_Drink()
    if (leftTrending_popular_in_health == 0) {
        trendingLeftBtn_popular_in_health.style.display = 'none'
    }

    if (rightTrending_popular_in_health < divsTrending_popular_in_health.length) {
        trendingRightBtn_popular_in_health.style.display = 'block'
    }
}


//////////////////popular in health //////////////


///////   add_to_cart  function ///////////////

function addtoCart(product) {
      


if (localStorage.getItem("healthkart_cart") === null) {
    localStorage.setItem("healthkart_cart", JSON.stringify([]));
}
let array = JSON.parse(localStorage.getItem("healthkart_cart"));
let present  = false;

  array.forEach((pro)=>{
    if(pro.name == product.name)
    {  
        pro["quantity"]++;
        present = true;
    }
 })
if(present)
{
localStorage.setItem("healthkart_cart", JSON.stringify(array));
}else{
  product["quantity"] = 1;
  array.push(product);
  localStorage.setItem("healthkart_cart", JSON.stringify(array));
}
}
///////   add_to_cart  function ///////////////

///// product page /////////

function productPage(){
    window.location.href = 'products.html'
}

/// product page //////////