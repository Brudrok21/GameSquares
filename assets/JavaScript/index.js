import fun_CreateRandomArrGrid from './modules/fun_CreateRandomArrGrid.js'
import fun_CreateObj_Line from "./modules/fun_CreateObj_Line.js"
import fun_CreateSquaresField from "./modules/fun_CreateSquaresField.js"
import fun_click_squares from "./modules/fun_click_squares.js"
import fun_confetti_animation from './modules/fun_confetti_animation.js'
import saveCookie from "./modules/saveCookie.js"
 
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
let name_q;
let save_q;
let timer;
let COOKIE_INFO = new Object();

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
 console.log(COOKIE_INFO);

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

  }, 1000);
}

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
  //

  fun_CreateRandomArrGrid(select_x, select_y, ARR_GRID);
  fun_CreateObj_Line(select_x, select_y, OBJ_LINE, ARR_GRID);

  fun_timer();

  //--
  fun_CreateSquaresField(OBJ_LINE, CreateSquaresField);
  squares = document.querySelectorAll(".squares");
  fun_click_squares(squares, OBJ_LINE, count_moves, ARR_GRID, timer, COOKIE_INFO, count_min, count_sec);
  //--
  // fun_confetti_animation();
  console.log(ARR_GRID)
});

Save_cookie.checked = COOKIE_INFO.checked_cookie;
Save_cookie.addEventListener("click", () => { 
  name_q = "checked_cookie";
  save_q = Save_cookie.checked;
  saveCookie(name_q, save_q, COOKIE_INFO);
});
 

// function delete cookie 
function deleteCookie() {
  document.cookie = "SAVEOBJ" + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
 



