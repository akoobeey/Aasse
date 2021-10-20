let hours = document.querySelector('.hourses'),
        minut = document.querySelector('.minutes'),
        second = document.querySelector('.secondes'),
        start = document.querySelector('.button')


start.addEventListener('click', function(e){
    if (start.innerHTML === 'start') {
        start.innerHTML = 'stop'
    } else if (start.innerHTML === 'stop') {
        start.innerHTML = 'clear'
    } else if (start.innerHTML === 'clear') {
        start.innerHTML = 'start'
        minut.innerHTML = 0 + 0;
        second.innerHTML = 0 + 0;
        hours.innerHTML = 0 + 0;
    }
})


function timer() {
    if (start.innerHTML === 'stop') {
         second.innerHTML++
        if (second.innerHTML >= 59) {
            second.innerHTML = 0 + '0'
            minut.innerHTML++
        }
        if (minut.innerHTML >= 59) {
            minut.innerHTML = 0 +'0'
            hours.innerHTML++
        }
        
    } else if (start.innerHTML === 'start') {
        second.innerHTML = 0 + 0;
        minut.innerHTML = 0 + 0;
        hours.innerHTML = 0 + 0;
    }
    setTimeout(() => { timer()  }, 1000);
       
  
}

timer()
