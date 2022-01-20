

function nextPage(e){
    e.preventDefault()
    console.log('hello');
   let form = document.getElementById("form_data")

   let user_address={

     first_name:form.first_name.value ,
     last_name:form.last_name.value ,
     email:form.email.value ,
     mobile:form.mob.value ,
     Address1:form.Enter_Address1.value ,
     Address2:form.Enter_Address2.value ,
     city:form.city.value ,
     state:form.state.value ,
     pincode:form.pin.value ,

   }
  console.log(user_address)

  let ARRAY = JSON.parse(localStorage.getItem('healthkart_address'))

ARRAY.push(user_address)

localStorage.setItem('healthkart_address',JSON.stringify(ARRAY))
window.location.href = 'payment.html'
}

function tolocalStorage(){
    if(localStorage.getItem('healthkart_address') === null){

    localStorage.setItem('healthkart_address', JSON.stringify([]));
}
}

tolocalStorage()
