var totalPrice=0;
const handleLogin=(e)=>{
    e.preventDefault();
    username_error.innerHTML = "";
    email_error.innerHTML = "";
    password_error.innerHTML = "";
    cpassword_error.innerHTML = "";
    if(username.value.trim()==="")
    {
        username_error.innerHTML="**Please Enter your username**"
    }
    if(email.value.trim()==="")
    {
        email_error.innerHTML="**Please Enter your Email**"
    }
    if(password.value.trim()==="")
    {
        password_error.innerHTML="**Please Enter your Password**"
    }
    if(!password_error.innerHTML&&password.value.length<7)
    {
        password_error.innerHTML="**Password should be atleast 7 characters long**";
    }
    if(cpassword.value.trim()==="")
    {
        cpassword_error.innerHTML="**Please Enter your Password**"
    }
    else
    {
        if(!password_error.innerHTML&&password.value!==cpassword.value)
        {
            password_error.innerHTML=cpassword_error.innerHTML="";
            password_error.innerHTML="**Password and confirm password mismatch"
            cpassword_error.innerHTML="**Password and confirm password mismatch"
        }
    }
    if(username_error.innerHTML===""&&email_error.innerHTML===""&&password_error.innerHTML===""&&cpassword_error.innerHTML==="")
    {
        alert("success");
        login.classList.add('d-none');
        calculation.classList.remove('d-none');
    }
}

const handleCalculation=(e)=>{
  console.log("Welcome")
  e.preventDefault();
  calculation.classList.add('d-none');
  bill.classList.remove('d-none');
  priceDisplay.innerHTML=totalPrice;
}

function addCity(price)
{
    totalPrice+=price;
}

const buttons = document.querySelectorAll('.list button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
    });
});






const form=document.getElementById('login').querySelector('form');
form.addEventListener('submit',handleLogin);

// const form2 = document.getElementById('calculation').querySelector('form');
// form2.addEventListener('submit', handleCalculation);

const form2=document.getElementById('calculation').querySelector('form');
form2.addEventListener('submit',handleCalculation);