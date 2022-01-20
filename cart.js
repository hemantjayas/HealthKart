let cart_data = JSON.parse(localStorage.getItem("healthkart_cart"));
let data_div = document.querySelector("#cart_data");
let totalAmount = document.getElementById('totalAmount');
let proceedToPay = document.getElementById('proceedtopay');
let cartItem = document.getElementById('cartItem');
let pincode = document.getElementById('pincode');
let coupon = document.getElementById('coupon');
let order = document.getElementById('order');
let shipping = document.getElementById('shipping');
let count = 0;
let datadiv = document.getElementById("cart_data");
let total = 0;

function Cart_items() {
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
                m_quantity.append(quan,buttonMinus,buttonPlus)
                buttonPlus.onclick = ()=>{
                     product.quantity++;
                     quan.textContent = 'Quantity '+ product.quantity;
                     localStorage.setItem('healthkart_cart',JSON.stringify(cart_data))
                     total = (product.price)*product.quantity;
                     totalAmount.textContent= `Final Payable ₹ ${total} `;
                }
                buttonMinus.onclick = ()=>{
                    product.quantity--;
                    if(product.quantity == 1) {
                        buttonMinus.disabled = true
                    }
                    
                     quan.textContent = 'Quantity '+ product.quantity;
                     localStorage.setItem('healthkart_cart',JSON.stringify(cart_data))
                     total = (product.price)*product.quantity;
                     totalAmount.textContent= `Final Payable ₹ ${total} `;
                } 
                div.style.textAlign = 'center'
                let imgProduct = document.createElement('img');
                imgProduct.src = product.imgProduct;
                divtxt.append(m_name, m_price1,m_quantity)
                div.append(imgProduct, divtxt);
                datadiv.append(div);
                total += Number(product.price);
        });
        proceedToPay.textContent  = `Proceed to Pay ₹ ${total} `;
        proceedToPay.addEventListener('click', function(){
                location.href = "address.html";
        })
        totalAmount.textContent = `Final Payable ₹ ${total} `;
        cartItem.innerHTML = `My Cart`
        pincode.innerHTML = 'Pincode'
        coupon.innerHTML = 'Apply Code →'
        order.innerHTML = "Order Summery";
        shipping.innerHTML = "Shipping Charges - Free"
}
Cart_items()
​
