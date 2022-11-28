(function(){

    let counter = document.querySelectorAll('.counter');
    let limit = 0;
    window.addEventListener('scroll', function(){  
        if( limit == counter.length ){ return; }
    for(let i = 0; i < counter.length; i++){
        let pos = counter[i].getBoundingClientRect().top; 
        let win = window.innerHeight - 40;
        if( pos < win && counter[i].dataset.stop === "0" ){
            counter[i].dataset.stop = 1;
            let x = 0;
            limit++; 
        let int = setInterval(function(){
            x = x + Math.ceil( counter[i].dataset.to / 50 ); 
            counter[i].innerText = x;
            if( x > counter[i].dataset.to ){
                counter[i].innerText = counter[i].dataset.to;
                clearInterval(int);
            }
        }, 70);
        }
    }
    }); 
    })();