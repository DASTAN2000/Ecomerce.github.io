<<<<<<< HEAD

const bar=document.getElementById('bar');const close=document.getElementById('close');const nav=document.getElementById('navbar');if(bar){bar.addEventListener('click',()=>{nav.classList.add('active')})}
if(close){close.addEventListener('click',()=>{nav.classList.remove('active')})}
=======
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
>>>>>>> 5c68e8406595e069b205c83aa0ffba54078b2a17
