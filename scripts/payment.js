

    let upi = document.getElementById('upi')
    let debitCard = document.getElementById('debitCard')
    let creditCard = document.getElementById('creditCard')
    let wallet = document.getElementById('wallet')
    let iBanking = document.getElementById('iBanking')
    let emi = document.getElementById('emi')
    let cod = document.getElementById('cod')
    let upipara = document.getElementById('upipara')
    let dcPara = document.getElementById('dcPara')
    let ccPara = document.getElementById('ccPara')
    let walletPara = document.getElementById('walletPara')
    let ibPara = document.getElementById('ibPara')
    let emipara = document.getElementById('emipara')
    let codPara = document.getElementById('codPara')

    let processDivs = document.querySelectorAll('#process>div')
    let optionsPs = document.querySelectorAll('#options>p')
    console.log(processDivs.length);

    // for (let i = 0; i < processDivs.length; i++) {
    //     processDivs[i].style.display = 'none'

    // }

    dcPara.onclick = function () {
        for (let i = 0; i < processDivs.length; i++) {
            processDivs[i].style.display = 'none'
            optionsPs[i].style.backgroundColor = 'white'
            optionsPs[i].style.borderRight = '1px solid rgb(214, 211, 211)'
            

        }
        debitCard.style.display = 'block'
        dcPara.style.backgroundColor = '#f2ffff'
        dcPara.style.borderRight = '5px solid #00c0bf'

    }
    ccPara.onclick = function () {
        for (let i = 0; i < processDivs.length; i++) {
            processDivs[i].style.display = 'none'
            optionsPs[i].style.backgroundColor = 'white'
            optionsPs[i].style.borderRight = '1px solid rgb(214, 211, 211)'



        }
        creditCard.style.display = 'block'
        ccPara.style.backgroundColor = '#f2ffff'
        ccPara.style.borderRight = '5px solid #00c0bf'


    }
    walletPara.onclick = function () {
        for (let i = 0; i < processDivs.length; i++) {
            processDivs[i].style.display = 'none'
            optionsPs[i].style.backgroundColor = 'white'
            optionsPs[i].style.borderRight = '1px solid rgb(214, 211, 211)'


        }
        wallet.style.display = 'block'
        walletPara.style.backgroundColor = '#f2ffff'
        walletPara.style.borderRight = '5px solid #00c0bf'


    }
    ibPara.onclick = function () {
        for (let i = 0; i < processDivs.length; i++) {
            processDivs[i].style.display = 'none'
            optionsPs[i].style.backgroundColor = 'white'
            optionsPs[i].style.borderRight = '1px solid rgb(214, 211, 211)'
            
        }
        iBanking.style.display = 'block'
        ibPara.style.backgroundColor = '#f2ffff'
        ibPara.style.borderRight = '5px solid #00c0bf'

    }
    emiPara.onclick = function () {
        for (let i = 0; i < processDivs.length; i++) {
            processDivs[i].style.display = 'none'
            optionsPs[i].style.backgroundColor = 'white'
            optionsPs[i].style.borderRight = '1px solid rgb(214, 211, 211)'

        }
        emi.style.display = 'block'
        emiPara.style.backgroundColor = '#f2ffff'
        emiPara.style.borderRight = '5px solid #00c0bf'

    }
    codPara.onclick = function () {
        for (let i = 0; i < processDivs.length; i++) {
            processDivs[i].style.display = 'none'
            optionsPs[i].style.backgroundColor = 'white'
            optionsPs[i].style.borderRight = '1px solid rgb(214, 211, 211)'

        }
        cod.style.display = 'block'
        codPara.style.backgroundColor = '#f2ffff'
        codPara.style.borderRight = '5px solid #00c0bf'

    }
    upiPara.onclick = function () {
        for (let i = 0; i < processDivs.length; i++) {
            processDivs[i].style.display = 'none'
            optionsPs[i].style.backgroundColor = 'white'
            optionsPs[i].style.borderRight = '1px solid rgb(214, 211, 211)'
        }
        upi.style.display = 'block'
        upiPara.style.backgroundColor = '#f2ffff'
        upiPara.style.borderRight = '5px solid #00c0bf'

    }

    /// upi ki javascript ///








    /// upi ki javascript ///

    let buttoncod = document.getElementById('codButton')
    codCheckbox.onclick = function () {
        let codCheckbox = document.getElementById('codCheckbox').value

        if (buttoncod.style.backgroundColor == 'orangered') {
            buttoncod.style.backgroundColor = 'grey'

        }
        else if (buttoncod.style.backgroundColor = 'grey') {
            buttoncod.style.backgroundColor = 'orangered'

        }
        else if (codCheckbox == 'on') {
            buttoncod.style.backgroundColor = 'orangered'
        }

    }
    console.log(codCheckbox);

    // #df4622
    // #8e8d8d

    ///////  payment address /////////

  let  payment_address = document.getElementById("paymPrice")
   let address = JSON.parse( localStorage.getItem('healthkart_address'))
   console.log('address:', address)
   let last_address = address[address.length -1]
   console.log('last_address:', last_address)
   
   let add_del = document.getElementById("add_del")
   add_del.innerText ="Delivery to "+ last_address.pincode+","+last_address.state

   let add_name = document.getElementById("add_name")
   add_name.innerText = last_address.first_name

   let add_other = document.getElementById("add_other")
   add_other.innerText = last_address.Address1+","+last_address.city+","+last_address.state+","+last_address.pincode+","+"Phone:"+last_address.mobile 
   
   
   
   ///////  payment address /////////

