function onMouseIn(hCons, myDIV){
    hCons.onmouseover = ()=> 
    {
        addDropDwn(myDIV)
    }
}
function onMouserOut(hCons, myDIV){
   hCons.onmouseleave = ()=> 
    {
        removeDropDwn(myDIV)
    }
}
function addDropDwn(x) {
      
    if (x.style.display === "none") {
      x.style.display = "grid";
      x.style.position ='absolute'
      x.style.zIndex = '1'
    }
  }
  function removeDropDwn(x){
      x.style.display = "none";
     }

 function addDropDwn1(mO,x ,array) {
        mO.onmouseover =()=> {
            array.forEach((ele)=>{
                 ele.style.display = "none"
          });
        if (x.style.display === "none") {
          x.style.display = "grid";
          x.style.position ='absolute';
          x.style.backgroundColor = 'white'
          x.style.zIndex = '1'
        }
       }
      }
      function getElement(id)
      {
          return document.getElementById(id);
      }
    
        function makeArr(array){
            let arr = []
            for(let i=0; i< array.length; i++)
            {
                arr.push(document.getElementById(array[i]))
            }
            return arr;
        }
        function makeNavbar(){
            let hCons = getElement('hk');
            let myDIV = getElement('myDIV');
            onMouseIn(hCons,myDIV)
            onMouserOut(hCons,myDIV)
        
          let bestSeller = getElement('bestSells');
          let catBestSell = getElement('catogBestSeller')
           onMouseIn(bestSeller,catBestSell)
           onMouserOut(bestSeller, catBestSell)
          let sNutri = getElement('sNutri')
          let hNutri = getElement('hNutri')
          let ar = makeArr(['forSport','forhealth'])
          addDropDwn1(sNutri,ar[0],ar)
          addDropDwn1(hNutri,ar[1],ar)
          
          let accounts = getElement('accounts')
          let dT = getElement('dropTable')
          onMouseIn(accounts,dT)
          onMouserOut(accounts,dT)

          let genderSec = document.getElementById('genderSec');
  genderSec.onmouseover = ()=>{
       let gendDroDwn = document.getElementById('gend-DroDwn')
       gendDroDwn.style.display = 'grid'
       gendDroDwn.style.zIndex = '1'
  }
  genderSec.onmouseleave = ()=>{
       let gendDroDwn = document.getElementById('gend-DroDwn')
       gendDroDwn.style.display = 'none'
  }
  let Crt = document.getElementById('cart');
  Crt.onclick = ()=>{
    window.location.href = 'cart.html'
  }
   
  let div_cat_Men = document.getElementById('div_cat_Men');
  let div_cat_Women = document.getElementById('div_cat_Women');
  div_cat_Men.onclick = ()=>{

    window.location.href = 'men.html'
  }
  div_cat_Women.onclick = ()=>{

    window.location.href = 'women.html'
  }

  let healthLogo = document.getElementById('logo');
  healthLogo.onclick= ()=>
{
  window.location.href = 'index.html'
}

const sign = document.getElementById('sI')
  sign.onclick = ()=>{
    window.location.href = 'login.html'
  }
  const signUp = document.getElementById('lO')
  signUp.onclick = ()=>{
    window.location.href = 'signup.html'
  }
  const catigg = document.getElementById('catagfirst');
  catigg.onclick= ()=>{
    window.location.href = 'products.html'
  }
  }
export {makeNavbar}