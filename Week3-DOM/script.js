let ctr = 0;
function callback(){
    const  element = document.querySelector('h2')[0];
    element.innerHTML = ctr;
    ctr = ctr + 1;
}

 setInterval(callback, 1000);