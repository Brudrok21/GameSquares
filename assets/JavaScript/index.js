import fun_CreateRandomArrGrid from './modules/fun_CreateRandomArrGrid.js'
import fun_CreateObj_Line from "./modules/fun_CreateObj_Line.js"
import fun_CreateSquaresField from "./modules/fun_CreateSquaresField.js"
import fun_click_squares from "./modules/fun_click_squares.js"

let test = document.querySelector("#test");
let CreateSquaresField = document.querySelector("#CreateSquaresField"),
  select_x = document.querySelector("#select_x"),
  select_y = document.querySelector("#select_y"),
  Confirm_x_y = document.querySelector("#Confirm_x_y"),
  sec = document.querySelector("#sec"),
  min = document.querySelector("#min");

let count_moves = 0;
let count_sec = 0;
let count_min = 0;
let timer;
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
  //

  fun_CreateRandomArrGrid(select_x, select_y, ARR_GRID);
  fun_CreateObj_Line(select_x, select_y, OBJ_LINE, ARR_GRID);

 
  //--
  fun_CreateSquaresField(OBJ_LINE, CreateSquaresField);
  squares = document.querySelectorAll(".squares");
  fun_click_squares(squares, OBJ_LINE, count_moves)
  //--
  fun_timer();
  console.log(OBJ_LINE)
});


// test.addEventListener("click", () => {
//   clearInterval(timer);
// })




