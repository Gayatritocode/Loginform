a= "hello"
console.log(a)
function checkEmail(){
    var un=document.getElementById("user").value
    var em=document.getElementById("emsg")
    var emailRegex=/\S+@\S+\.\S+/.test(un)
    if(emailRegex){
        em.innerHTML="Email is correct"
        em.style.color="green"
        return true;
    }
    else{
        em.innerHTML="incorrect Email"
        em.style.color="red"
        return false;
    }
    }
    function checkpass(){
        var p=document.getElementById("pass").value
        var em=document.getElementById("pmsg")
        var passRegex=/(?=.*\d)(?=.*[a-z])(?=.*\W).{8}/.test(p);
        if(passRegex){
            em.innerHTML="password is correct"
            em.style.color="green"
            return true
        }
        else{
            em.innerHTML="Incorrect password"
            em.style.color="red"
            return false;
        }
    }
   function  checkmob(){
        var m =document.getElementById("mob").value
        var em =document.getElementById("mmsg")
        var mobRegex=/^\d{10}$/.test(m);
        if(mobRegex){
            em.innerHTML="Mobile number is correct"
            em.style.color="green"
            return true;
        }else{
            em.innerHTML="incorrect mobile no"
            em.style.color="red"
            return false;
        }
        
    }
    function login(){
        if(checkEmail()&& checkpass() && checkmob()){
            window.open("day4cancel.html");
        }else{
            document.getElementById("loginmsg").innerHTML="Invalid username or pass or mobile no"
            document.getElementById("loginmsg").style.color="red"
        }
    }
  
    // JavaScript function to log out and redirect to the login form
    function logout() {
        window.location.href = "day5.html"; // Redirect to login page (or day4.html)
    }
