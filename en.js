const input=document.getElementById('email')
const subscribeBtn=document.querySelector('.box')
const invalidMessage=document.querySelector('.invalid-message');
const main=document.querySelector('main');
const image=document.querySelector('.sucess');
const confirmedMessage=document.getElementById('confirmed')
const thanksMessage=document.getElementById('thanks');
const dismissBtn=document.getElementById('btn');
const sucessSec=document.querySelector('.two')
sucessSec.style.display='none'


function email() {
   // const input=document.getElementById('email');
   input.value;

   
   subscribeBtn.style.backgroundColor=' hsl(4, 100%, 67%)';

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   if(input.value==='') {
      invalidMessage.textContent='please enter your email';
      invalidMessage.style.color=' hsl(4, 100%, 67%)'
   }else if(!emailPattern.test(input.value)) {
      input.style.backgroundColor=' hsl(4, 100%, 67%)';
      input.style.borderColor=' hsl(4, 100%, 67%)'
      invalidMessage.textContent='valid email required';
      invalidMessage.style.color=' hsl(4, 100%, 67%)';
    }else{
       main.style.display='none';
       sucessSec.style.display='block'
       confirmedMessage.innerHTML=`A confirmaton email has been sent to <strong>${input.value}</strong>.Please open it and click the button inside and confirm 
         your subscription`
        input.style.fontWeight='600'
    }       
}


subscribeBtn.addEventListener('click',email);

function dismissButton() {
    sucessSec.style.display='none';
    main.style.display='flex';

}

dismissBtn.addEventListener('click',dismissButton)