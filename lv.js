const yes = document.querySelector('#btn1')
console.log(yes);

const no = document.querySelector('#btn2')
console.log(no);

const div2 = document.querySelector('#div2')
console.log(div2);

const div3 = document.querySelector('#div3')
console.log(div3);

yes.addEventListener('click' , ()=>{
   let display = div2.classList.toggle(true)
   if(display){
    div2.style.display='none';
    div3.style.display='block';
   }

   else{
    div2.style.display='block';
    div3.style.display='none';
   }
})

// ====================================================

const apple = div2.getBoundingClientRect();
const ball = no.getBoundingClientRect();

no.addEventListener('mouseover',()=>
{
    let a = Math.floor(Math.random()*(apple.width-ball.width))+1;
    let b = Math.floor(Math.random()*(apple.height-ball.height))+1;
    no.style.left=a+'px';
    no.style.top=b+'px';
})

// ================================================