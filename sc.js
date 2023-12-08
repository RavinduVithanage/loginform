document.getElementById('email').addEventListener("input",checkEmaill);
document.getElementById('password').addEventListener("input",checkPassword);


function checkEmaill(event){

    let email=event.target.value;
    const emailError=document.getElementById("email-error");
    
    if(!email.trim()==""){
        validateEmail(email);
    }else
        emailError.classList.remove('hidden');
    return email;
}

function validateEmail(email){
    
        const emailError=document.getElementById("email-error");
        var emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(!emailRegex.test(email)){
            emailError.classList.remove('hidden');
            emailError.innerHTML="Email is not valid"
           
        }else
        emailError.innerHTML=""
        return email =emailRegex.test(email);
}

function checkPassword(event){

    let password=event.target.value;
    const passwordError=document.getElementById("password-error");
    
    if(!password.trim()==""){
        validatePassword(password);
    }else
        passwordError.classList.remove('hidden');
}  

function validatePassword(password){
    const passwordError=document.getElementById("password-error");
    var passwordRegex= /^[A-Za-z]\w{7,14}$/;
    if(!passwordRegex.test(password)){
        passwordError.classList.remove('hidden');
        passwordError.innerHTML="Password is not valid"
    }else
    passwordError.innerHTML=""
    return password =passwordRegex.test(password);
}  
function login(){

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    let data = "\r Username: " + email+ " \r\n " + "Password: " + password ;
  
    
    if(email.trim() == "" || password.trim() == ""){
        isEmpty(email,password);
    } else {
        if(validateEmail(email) == true && validatePassword(password)== true){
           
            const textToBLOB = new Blob([data], { type: "text/plain" });
            const link = document.createElement("a");
            link.download = 'form.txt';
            link.href = window.URL.createObjectURL(textToBLOB);
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            link.remove();
            createToster();          
        }
    }
}

function isEmpty(email,password){

    const emailError=document.getElementById("email-error");
    const passwordError=document.getElementById("password-error");
    
    if(email ){
        checkEmaill(email);
    }else if(password){
        checkPassword(password);
    }else{
        emailError.classList.remove('hidden');
        passwordError.classList.remove('hidden');

    }   
}
function createToster(){

    const succseefullMessage=document.getElementById("success");
    succseefullMessage.classList.remove('hidden');
    setTimeout(function(){ 
    succseefullMessage.classList.add('hidden'); 
        
    }, 30000);
}
document.getElementById('close').addEventListener("click",function(){
    const succseefullMessage=document.getElementById("success");
    succseefullMessage.classList.add('hidden');
});

