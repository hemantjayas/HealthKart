let cart_data = JSON.parse(localStorage.getItem("healthkart_cart"));
        var total = 0;
// let data_div = document.querySelector("#cart_data");
 function applyCoup(){
     if(document.getElementById('code').value === 'masai30')
     {
         localStorage.setItem('code_Health', true)
         refresh()
         alert('applied')
     }else{
         alert('INVALID')
     }
 }
 function applyCODE(){
    if(document.getElementById('code_Box').style.display ==='flex')
    {
        document.getElementById('code_Box').style.display ='none'
    }else{
        document.getElementById('code_Box').style.display ='flex'
    }
 }

let totalAmount = document.getElementById('totalAmount');
let proceedToPay = document.getElementById('proceedtopay');
let cartItem = document.getElementById('cartItem');
let pincode = document.getElementById('pincode');
let coupon = document.getElementById('coupon');
let order = document.getElementById('order');
let shipping = document.getElementById('shipping');
let count = 0;
let datadiv = document.getElementById("cart_data");
let data = []
cart_data = filter(cart_data);
console.log(cart_data);
function Cart_items() {
    proceedToPay.onclick = ()=>{
        window.location.href = 'address.html'
    }
        cart_data.forEach(function (product) {
                let div = document.createElement("div");
                let divtxt = document.createElement("span");
                let m_name = document.createElement('b');
                m_name.innerText = product.name;
                let m_price1 = document.createElement('p');
                m_price1.innerText = '₹ ' + product.price;
                let m_quantity = document.createElement('div');
                m_quantity.style.display = 'flex'
                m_quantity.style.alignItems = 'center'
                m_quantity.style.position = 'relative'
                let quan = document.createElement('p')
                let buttonMinus = document.createElement('button')
                let buttonPlus = document.createElement('button')
                buttonMinus.innerText = '-'
                buttonPlus.innerText = '+'
                buttonMinus.setAttribute('class','quantity_btn')
                buttonPlus.setAttribute('class','quantity_btn')
                quan.textContent = 'Quantity '+ product.quantity;
                total += product.price*product.quantity;
                m_quantity.append(quan,buttonMinus,buttonPlus)
                buttonPlus.onclick = ()=>{
                    
                     product.quantity++;
                     quan.textContent = 'Quantity '+ product.quantity;
                     localStorage.setItem('healthkart_cart',JSON.stringify(cart_data))
                     total += product.price;
                     totalAmount.textContent= `Final Payable ₹ ${total} `;
                     proceedToPay.innerHTML = `Proceed to Pay ₹ ${total} `;
                }
                buttonMinus.onclick = ()=>{
                    
                    product.quantity--;
                     quan.textContent = 'Quantity '+ product.quantity;
                     localStorage.setItem('healthkart_cart',JSON.stringify(cart_data))
                     total =  total -product.price;
                     totalAmount.textContent= `Final Payable ₹ ${total}`;
                     refresh()
                } 
                div.style.textAlign = 'center'
                let imgProduct = document.createElement('img');
                imgProduct.src = product.imgProduct;
                divtxt.append(m_name, m_price1,m_quantity)
                div.append(imgProduct, divtxt);
                datadiv.append(div);
        });
        proceedToPay.innerHTML = `Proceed to Pay ₹ ${total} `;
        proceedToPay.addEventListener('click', function(){
                location.href = "#";
        })
        localStorage.setItem('total_health',total)
        if(localStorage.getItem('code_Health') == "true")
                     {
                         total = Math.floor(total*0.7);
                         document.getElementById('app').textContent = 'Code Applied! Click Here to Remove'
                         proceedToPay.innerHTML = `Proceed to Pay ₹ ${total} `;
                         
                         localStorage.setItem('discount_health',Math.floor(total*0.3))
                     }else{
                        localStorage.setItem('discount_health',false)
                     }
        totalAmount.textContent = `Final Payable ₹ ${total} `;
        
        cartItem.innerHTML = `My Cart`
        pincode.innerHTML = 'Pincode'
        coupon.innerHTML = 'Apply Code'
        coupon.setAttribute('id','code_APP')
        coupon.onclick = ()=>{
            applyCODE()
        }
        order.innerHTML = "Order Summery";
        shipping.innerHTML = "Shipping Charges - Free"
}
Cart_items()
document.getElementById('app').onclick =()=>{
                            localStorage.setItem('code_Health', 'false')
                            refresh()
                         }
// function increaseQuan(product){
    
    function filter(cart_data){

        let arr = [];
        cart_data.forEach(pro=>{

            if(pro.quantity>0)
            {
                arr.push(pro)
            }
        })
        localStorage.setItem('healthkart_cart',JSON.stringify(arr))
        return arr;
    }
// }
function decreaseQuan(product){
    product.quantity--;
}
function refresh(){
    window.location.href = 'cart.html'
}