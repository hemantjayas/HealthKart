let a=document.getElementById("cross");
        a.addEventListener("click",goto);
        function goto(){
            window.location.href="index.html"
        }

        var flag=false;
        function Signup(e){
            e.preventDefault();
            let myform = document.getElementById("signup-form");
            let email = myform.mobile.value;
            let eror=document.getElementById("errortext");
            console.log(email);
            
            if(localStorage.getItem("users")==null){
                localStorage.setItem("users", JSON.stringify([]));
            }
            let user = {
                email,
            }
            if(user.email==="" && (email.length<10)){
               let wrong=document.createElement("p");
                wrong.textContent="Please enter a valid Mobile Number";
                eror.append(wrong);
            }
            else{
                window.location.href='login.html';
            }
            /// get arr from local storage 
            let arr =  JSON.parse(localStorage.getItem("users"));
            arr.push(user);

            localStorage.setItem("users", JSON.stringify(arr));
        }


        var all_users = JSON.parse(localStorage.getItem("users"));
        function login(e){
                e.preventDefault();
                let myform = document.getElementById("login-form");
                let email = myform.user.value;
                for(var i=0;i<all_users.length;i++){
                    if(all_users[i].email===email&&(email.length>9)){
                        flag=true;
                        break;                   
                    }else{
                        flag=false;
                    }
                }
                if(flag===true){
                    window.location.href = "index.html";
                }else{
                    alert("Please enter a valid Mobile Number");
                }
             }



    let tab=document.getElementById("tab-1");
    tab.addEventListener("click",openlogin);
    function openlogin(){
        window.location.href="login.html"
    }
    let tab1=document.getElementById("tab-2");
    tab1.addEventListener("click",opensignup);
    function opensignup(){
        window.location.href="signup.html"
    }