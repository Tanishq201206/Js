const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach( (button) => {
   console.log(button);
   button.addEventListener('click', function(e){
    //    console.log(e)
    //    console.log(e.target)
    //    switch (e.target.id) {
    //     case "grey":
    //         body.style.backgroundColor = 'grey'
    //         break;
    //     case "white":
    //         body.style.backgroundColor = 'white'
    //         break;
    //     case "yellow":
    //         body.style.backgroundColor = 'yellow'
    //         break;
    //     case "blue":
    //         body.style.backgroundColor = 'blue'
    //         break;
       
    //    }
     body.style.backgroundColor = e.target.id
   })
})