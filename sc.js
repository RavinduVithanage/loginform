document.getElementById('email').addEventListener("input",checkEmaill);
document.getElementById('password').addEventListener("input",checkPassword);
function checkEmaill(event){

    let email=event.target.value;
    const emailError=document.getElementById("email-error");
    
    if(!email.trim()==""){
        validateEmail(email);
    }else
        emailError.classList.remove('hidden');
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
