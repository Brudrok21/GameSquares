import get_saveLocalStorage from "./get_saveLocalStorage.js"
import get_loadLocalStorage from "./get_loadLocalStorage.js"


const styleArr = ["gradient-Summer_Dog","gradient-Purpink","gradient-Wiretap","gradient-By_Design","gradient-Cool_Sky","gradient-Snapchat","gradient-Ohhappiness","gradient-Argon","gradient-Memariani","gradient-Dance_To_Forget"];
const checkbox_save = document.querySelector("#checkbox_save");
const finish_animation = document.querySelector("#finish_animation");

export default function get_victory(MainOBJ){
  const mixed = MainOBJ.mixed_length.join();
  const asstd = MainOBJ.asstd_length.join();

  if(mixed === asstd){
    MainOBJ.saveHistory = new Object();
    MainOBJ.win = true;
    VictoryAnimation() 

    if (checkbox_save.checked == true) { 
      const date = new Date(); 
      MainOBJ.saveHistory.map = `${MainOBJ.x} x ${MainOBJ.y}`;
      MainOBJ.saveHistory.moves = MainOBJ.moves;
      MainOBJ.saveHistory.Local_date = date.toLocaleDateString();
      MainOBJ.saveHistory.Local_time_finish = date.toLocaleTimeString();
      MainOBJ.saveHistory.Local_time_start = MainOBJ.Local_time_start;
      MainOBJ.saveHistory.time = `${MainOBJ.min}:${MainOBJ.sec}`;

      MainOBJ.History.push(MainOBJ.saveHistory); 
      get_saveLocalStorage("History", MainOBJ.History);
      get_loadLocalStorage(MainOBJ);
    }
  } 
}

function VictoryAnimation(){ 
  const create_max_confetti = Math.floor(Math.random() * (75 - 45)) + 45; 
  for (let i = 0; i < create_max_confetti; i++) {
    const random = Math.floor(Math.random() * (styleArr.length - 1)) + 1;
    const random_x = Math.floor(Math.random() * (80 - 15)) + 15;
    const random_size = Math.floor(Math.random() * (80 - 40)) + 40;
 
    finish_animation.insertAdjacentHTML("beforeend", `
    <div class="flight_anim"  style="left:${random_x}vw;"> 
      <cube color="${styleArr[random]}" class="cube_border" style="width:${random_size}px; height:${random_size}px;">
        <span class="cube_bg"></span>
      </cube>
    </div>
    `);
  }



  for (let i = 0; i < finish_animation.children.length; i++) {
    const this_cube = finish_animation.children[i];
    const random_duration = Math.floor(Math.random() * (3500 - 1000)) + 1000;
    const random_delay = Math.floor(Math.random() * (3000 - 100)) + 100;
    const random_x = Math.floor(Math.random() * (10 - 1)) + 10;
    const random_duration_child = Math.floor(Math.random() * (3500 - 1000)) + 1000;
 
    this_cube.children[0].animate([ 
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
}