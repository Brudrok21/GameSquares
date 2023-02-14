
function get_finish_animation() {
  let styleArr = ["gradient-Summer_Dog","gradient-Purpink","gradient-Wiretap","gradient-By_Design","gradient-Cool_Sky","gradient-Snapchat","gradient-Ohhappiness","gradient-Argon","gradient-Memariani","gradient-Dance_To_Forget"];

  let finish_animation = document.querySelector("#finish_animation");
  let create_max_confetti = Math.floor(Math.random() * (75 - 45)) + 45;
   
  for (let i = 0; i < create_max_confetti; i++) {
    let random = Math.floor(Math.random() * (styleArr.length - 1)) + 1;
    let random_x = Math.floor(Math.random() * (80 - 15)) + 15;
    let random_size = Math.floor(Math.random() * (80 - 40)) + 40;
 
    finish_animation.insertAdjacentHTML("beforeend", `
    <div class="flight_anim"  style="left:`+random_x+`vw;"> 
    <cube color=`+styleArr[random]+` class="cube_border" style="width:`+random_size+`px; height:`+random_size+`px;"><span class="cube_bg"></span></cube></div>
    `);
  }



  for (let i = 0; i < finish_animation.children.length; i++) {
    let this_cube = finish_animation.children[i];
    let random_duration = Math.floor(Math.random() * (3500 - 1000)) + 1000;
    let random_delay = Math.floor(Math.random() * (3000 - 100)) + 100;
    let random_x = Math.floor(Math.random() * (10 - 1)) + 10;
    let random_duration_child = Math.floor(Math.random() * (3500 - 1000)) + 1000;
 
    this_cube.lastChild.animate([ 
      { transform: 'rotate(0) ',opacity: "1" }, 
      { transform: `rotate(360deg)  `,opacity: "1" }
    ], {
      delay:random_delay,
      duration: random_duration_child, 
      iterations: Infinity
    }); 

    this_cube.animate([
      // keyframes
       { 
        transform: `translate(`+random_x+`px, -5vh)`,
        opacity: "1",  
 
      }, 
       { 
        transform: `translate(-`+random_x+`px, 100vh)`,
        opacity: "1",  
 
      } 
    ], {
      // timing options
      delay:random_delay,
      duration: random_duration,
      iterations: 1
    });

 

  }
   
  setTimeout(() => { finish_animation.innerHTML="";}, 7500);  
}export default get_finish_animation;
