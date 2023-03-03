import get_victory from "./get_victory.js";
 

const doc_sec = document.querySelector("#sec");
const doc_min = document.querySelector("#min");
const Confirm_x_y = document.querySelector("#Confirm_x_y");
export default function get_timer(OBJ_Timer, MainOBJ) {
  get_victory(MainOBJ);
  let timer = setInterval(() => { 
    if (MainOBJ.win === true) { 
      clearInterval(timer);
    }else{
      OBJ_Timer.sec = (OBJ_Timer.sec >= 60 ? 0 : OBJ_Timer.sec + 1)
      OBJ_Timer.min = (OBJ_Timer.sec >= 60 ? OBJ_Timer.min + 1 : OBJ_Timer.min)
  
      doc_sec.textContent = (OBJ_Timer.sec >= 10 ? OBJ_Timer.sec : "0" + OBJ_Timer.sec);
      doc_min.textContent = (OBJ_Timer.min >= 10 ? OBJ_Timer.min : "0" + OBJ_Timer.min);
    } 
    MainOBJ.sec = (OBJ_Timer.sec >= 10 ? OBJ_Timer.sec : "0" + OBJ_Timer.sec);
    MainOBJ.min =(OBJ_Timer.min >= 10 ? OBJ_Timer.min : "0" + OBJ_Timer.min); 
  }, 1000); 

  Confirm_x_y.addEventListener("click", () => {
    clearInterval(timer);
    OBJ_Timer.sec = 0;
    OBJ_Timer.min = 0;
    OBJ_Timer.win = false;

    doc_sec.textContent = (OBJ_Timer.sec >= 10 ? OBJ_Timer.sec : "0" + OBJ_Timer.sec);
    doc_min.textContent = (OBJ_Timer.min >= 10 ? OBJ_Timer.min : "0" + OBJ_Timer.min);
  }) 
}