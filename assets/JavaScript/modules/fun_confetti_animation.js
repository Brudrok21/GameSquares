
function fun_confetti_animation() {
  let finish_animation = document.querySelector("#finish_animation");
  let create_max_confetti = Math.floor(Math.random() * (75 - 25)) + 25;
   
  for (let i = 0; i < create_max_confetti; i++) {
    let random = Math.floor(Math.random() * (9 - 1)) + 1;
    let random_x = Math.floor(Math.random() * (80 - 15)) + 15;
    let random_size = Math.floor(Math.random() * (86 - 48)) + 48;
    finish_animation.insertAdjacentHTML("beforeend", `<div class="div_confetti" style="left:`+random_x+`vw; width:`+random_size+`px;"><img class="confetti" src="./assets/images/confetti/` + random + `.png" alt="confetti.png"></div>`);
  }



  for (let i = 0; i < finish_animation.children.length; i++) {
    let this_img = finish_animation.children[i];
    let random_duration = Math.floor(Math.random() * (1500 - 500)) + 500;
    let random_delay = Math.floor(Math.random() * (1000 - 100)) + 100;
    let random_x = Math.floor(Math.random() * (10 - 1)) + 10;
    let random_duration_child = Math.floor(Math.random() * (5000 - 500)) + 500;
 
    this_img.lastChild.animate([ 
      { transform: 'rotate(0) ',opacity: "1" }, 
      { transform: `rotate(360deg)  `,opacity: "1" }
    ], {
      delay:random_delay,
      duration: random_duration_child, 
      iterations: Infinity
    }); 

    this_img.animate([
      // keyframes
       { 
        transform: `translate(`+random_x+`px, 0vh)`,
        opacity: "0",  
 
      },
      { 
        opacity: "1",  
        transform: `translate(-`+random_x+`px, 15vh)`
      },
       { 
 
        transform: `translate(`+random_x+`px, 30vh)`
      },
       { 
  
        transform: `translate(-`+random_x+`px, 45vh)`
      },
      { 
        opacity: "1",  
        transform: `translate(`+random_x+`px, 60vh)`
      },
       { 
        transform: `translate(-`+random_x+`px, 90vh)`,
        opacity: "0",  
 
      } 
    ], {
      // timing options
      delay:random_delay,
      duration: random_duration,
      iterations: 1
    });

 

  }
   
  setTimeout(() => { finish_animation.innerHTML="";}, 2500); 
  // console.log(random);
}export default fun_confetti_animation;
