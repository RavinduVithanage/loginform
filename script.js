function login(){

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    let data = "\r Username: " + email+ " \r\n " + "Password: " + password ;
    
    if(email.trim()=="" || password.trim()==""){
            isEmpty();
        }
    else{
        if(validateEmail(email)==true && validatePassword(password)==true){
            alert("login succseefull")
            const textToBLOB = new Blob([data], { type: "text/plain" });
            const link = document.createElement("a");
            link.download = 'form.txt';
            link.href = window.URL.createObjectURL(textToBLOB);
             link.style.display = "none";
             document.body.appendChild(link);
             link.click();
             link.remove();
                   
        }
    }
}

    
function isEmpty(){
    
        console.log("error");
        alert("password is not valid");
}
function validateEmail(email){

        var emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailRegex.test(email)){
            alert("email is not valid");
        }else
        return email =emailRegex.test(email);
}
function validatePassword(password){

    var passwordRegex= /^[A-Za-z]\w{7,14}$/;
    if(!passwordRegex.test(password)){
        alert("password is not valid");
    }else
    return password =passwordRegex.test(password);
}