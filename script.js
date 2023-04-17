const Para = document.getElementById('para');
const email = document.querySelector('.email-address');
const btnSubmit = document.querySelector('.btn-submit');
const errorImage = document.querySelector('.alert-icon');


btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    var mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(mail_format)){
        Para.innerHTML = 'Thank you for subscribing';
        Para.style.color = 'green';
        email.style.border = '1px solid black';
        errorImage.style.display = 'none';

    }
    else{
        Para.innerHTML = 'Please provide a valid email';
        Para.style.color = 'red';
        email.style.border = '1px solid red';
        errorImage.style.display = 'block';



        
    }
});