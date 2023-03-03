 
 


// New GetFunctions
import get_timer from './modules/get_timer.js'
import get_createField from './modules/get_createField.js'
import get_click_squares from './modules/get_click_squares.js'
import get_loadLocalStorage from './modules/get_loadLocalStorage.js'
import get_inpEdit from './modules/get_inpEdit.js'
import get_animation_title from './modules/get_animation_title.js'
import get_checkbox_save from './modules/get_checkbox_save.js';
 

 

const 
  CreateSquaresField = document.querySelector("#CreateSquaresField"), 
  Confirm_x_y = document.querySelector("#Confirm_x_y");

 
const MainOBJ = new Object({
  History: new Array(),
});
get_loadLocalStorage(MainOBJ);
get_inpEdit();
get_animation_title();
get_checkbox_save();
 
const OBJ_Timer = new Object({
  sec:0,
  min:0 
});

 
Array.from(CreateSquaresField.children).forEach((clickField)=>{
  clickField.addEventListener("click", ()=>{
    if(CreateSquaresField.dataset.startgame === "true"){ 
      get_createField(MainOBJ);
      get_timer(OBJ_Timer, MainOBJ);
      get_click_squares(MainOBJ);
      CreateSquaresField.dataset.startgame = false;
    } 
  }); 
}); 

Confirm_x_y.addEventListener("click", () => { 
  get_createField(MainOBJ);
  get_timer(OBJ_Timer, MainOBJ);
  get_click_squares(MainOBJ);
}); 