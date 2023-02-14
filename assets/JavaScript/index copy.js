import fun_CreateRandomArrGrid from './modules/fun_CreateRandomArrGrid.js'
import fun_CreateObj_Line from "./modules/fun_CreateObj_Line.js"
import fun_CreateSquaresField from "./modules/fun_CreateSquaresField.js"
import fun_click_squares from "./modules/fun_click_squares.js"
import fun_confetti_animation from './modules/fun_confetti_animation.js'
import saveCookie from "./modules/saveCookie.js"
import fun_finish from './modules/fun_finish.js'
import fun_create_history_list from './modules/fun_create_history_list.js'
import get_animation_title from './modules/get_animation_title.js'
import get_inpEdit from './modules/get_inpEdit.js'

get_inpEdit();
get_animation_title();

let CreateSquaresField = document.querySelector("#CreateSquaresField"),
  select_x = document.querySelector("#select_x"),
  select_y = document.querySelector("#select_y"),
  Confirm_x_y = document.querySelector("#Confirm_x_y"),
  sec = document.querySelector("#sec"),
  min = document.querySelector("#min"),
  Save_cookie = document.querySelector("#Save_cookie");

let count_moves = 0;
let count_sec = 0;
let count_min = 0;

let timer;
let COOKIE_INFO = new Array();
let COOKIE_INFO_CHECKBOX;
const OBJ = new Object();

let date = new Date();
let Local_time_start = date.toLocaleTimeString();


function loadCookie() {
  let name = "COOKIE_INFO=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      COOKIE_INFO = JSON.parse(c.substring(name.length, c.length));
      return c.substring(name.length, c.length);
    }
  }
  return "";
} loadCookie();


fun_create_history_list(COOKIE_INFO);



const OBJ_LINE = new Object();
const ARR_GRID = new Array();
let squares;
Confirm_x_y.addEventListener("click", () => {
  //refresh
  ARR_GRID.length = 0;
  for (var member in OBJ_LINE) delete OBJ_LINE[member];
  CreateSquaresField.innerHTML = "";
  clearInterval(timer);
  count_sec = 0;
  count_min = 0;
  min.textContent = "0" + count_min;
  sec.textContent = "0" + count_sec;
  count_moves = 0;
  moves.textContent = count_moves;
  CreateSquaresField.removeAttribute("disabled");
  date = new Date();
  Local_time_start = date.toLocaleTimeString();
  // 

  fun_CreateRandomArrGrid(select_x, select_y, ARR_GRID);
  fun_CreateObj_Line(select_x, select_y, OBJ_LINE, ARR_GRID);



  //--
  fun_CreateSquaresField(OBJ_LINE, CreateSquaresField);
  squares = document.querySelectorAll(".squares");
  fun_click_squares(squares, OBJ_LINE, count_moves, ARR_GRID, timer, COOKIE_INFO, count_min, count_sec, OBJ);
  //--
  // fun_confetti_animation();
  fun_timer();
});


function loadCookie_checkbox() {
  let name = "CHECKED_CHECKBOX=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      COOKIE_INFO_CHECKBOX = JSON.parse(c.substring(name.length, c.length));
      return c.substring(name.length, c.length);
    }
  }
  return "";
} loadCookie_checkbox();
Save_cookie.checked = COOKIE_INFO_CHECKBOX;

Save_cookie.addEventListener("click", () => {
  let expires_checkbox = "; expires_checkbox=" + date.toUTCString();
  document.cookie = "CHECKED_CHECKBOX" + "=" + JSON.stringify(Save_cookie.checked) + expires_checkbox + "; path=/";
});


function fun_timer() {
  timer = setInterval(() => {
    count_sec++;
    if (count_sec < 10) {
      sec.textContent = "0" + count_sec;
    } else if (count_sec >= 10) {
      sec.textContent = count_sec;
    }
    if (count_sec == 59) {
      count_sec = 0;
      count_min++;
      if (count_min < 10) {
        min.textContent = "0" + count_min;
      } else if (count_min >= 10) {
        min.textContent = count_min;
      }
    }

    fun_finish(ARR_GRID, select_x, select_y, timer, OBJ, COOKIE_INFO, count_min, count_sec, Local_time_start);
  }, 1000);
}