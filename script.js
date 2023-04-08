const Para = document.getElementById('para');
const email = document.querySelector('.email-address');
const btnSubmit = document.querySelector('.btn-submit');


btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    var mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(mail_format)){
        Para.innerHTML = 'Thank you. Check your email for update';
        Para.style.color = 'green';
    }
    else{
        Para.innerHTML = 'Please provide a valid email';
        Para.style.color = 'red';
    }
});