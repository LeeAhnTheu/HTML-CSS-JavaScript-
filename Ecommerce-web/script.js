

// document.addEventListener('DOMContentLoaded', () => {
    // Your code here, including getting elements and attaching the listener
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');
    if(bar) {
        bar.addEventListener('click', () => {
                nav.classList.add('actived');
                console.log(nav);
    })
    }

    if(close) {
        close.addEventListener('click', () => {
            nav.classList.remove('actived');
        })
    }
//   });