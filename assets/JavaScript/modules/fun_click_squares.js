import fun_confetti_animation from './fun_confetti_animation.js'
import saveCookie from "./saveCookie.js"
// import fun_finish from './fun_finish.js'

let moves = document.querySelector("#moves"),
  timer_block = document.querySelector("#timer_block"),
  CreateSquaresField = document.querySelector("#CreateSquaresField"),
  select_x = document.querySelector("#select_x"),
  select_y = document.querySelector("#select_y");

  const ArrValue = new Array();
  let maxLenghtnSquares = Number(select_x.value) * Number(select_y.value); 
  const values = [...Array(maxLenghtnSquares - 1)].map((_, i) => i + 1); 
  values.push("x");
  for (let i = 0; i < values.length; i += Number(select_y.value)) {
    const chunk = values.slice(i, i + Number(select_y.value));
    ArrValue.push(chunk);
  }

function fun_click_squares(squares, OBJ_LINE, count_moves, ARR_GRID, timer, COOKIE_INFO, count_min, count_sec, OBJ) {  
  if (squares !== undefined) {
    let last_btn;
    squares.forEach((this_squares) => {
      this_squares.addEventListener("click", () => {
        if (CreateSquaresField.hasAttribute("disabled") === false) {
          
           
          count_moves++;
          squares.forEach((this_squares) => {
            if (this_squares.dataset.num == "x") last_btn = this_squares;
          });
           
          if (
            (this_squares.dataset.name_line == last_btn.dataset.name_line
              && Number(this_squares.dataset.index_squares) == Number(last_btn.dataset.index_squares) + 1)
            ||
            (this_squares.dataset.name_line == last_btn.dataset.name_line
              && Number(this_squares.dataset.index_squares) == Number(last_btn.dataset.index_squares) - 1)
          ) {
            fun_go_swap(this_squares, last_btn, OBJ_LINE, count_moves);
          }

          if (
            (Number(this_squares.dataset.name_line.split("_")[1]) == Number(last_btn.dataset.name_line.split("_")[1]) + 1
              && this_squares.dataset.index_squares == last_btn.dataset.index_squares)
            ||
            (Number(this_squares.dataset.name_line.split("_")[1]) == Number(last_btn.dataset.name_line.split("_")[1]) - 1
              && this_squares.dataset.index_squares == last_btn.dataset.index_squares)
          ) {
            fun_go_swap(this_squares, last_btn, OBJ_LINE, count_moves)
          }
 
           
          fun_search_disabled(squares); 
          // fun_finish(ARR_GRID, values, timer, COOKIE_INFO, count_min, count_sec, count_moves);
          last_btn = "";
          OBJ.count_moves = count_moves;
          // return count_moves;
        }
      });
    })
  } 
}

 

function fun_search_disabled(squares) {
  squares.forEach((this_squares) => {
    if (this_squares.dataset.num == "x") {
      this_squares.setAttribute("disabled", "disabled")
      this_squares.removeAttribute("active")
    } else {
      this_squares.removeAttribute("disabled")
      this_squares.setAttribute("active", "active")
      this_squares
    } 
    let thisArrValue = ArrValue[this_squares.dataset.name_line.split("_")[1]][this_squares.dataset.index_squares];
    if(this_squares.dataset.num == thisArrValue){ 
      this_squares.classList.add("socketTrue")
    }else{
      this_squares.classList.remove("socketTrue") 
    }
  });
}

function fun_go_swap(this_squares, last_btn, OBJ_LINE, count_moves) {  

  let saveItem = OBJ_LINE[this_squares.dataset.name_line][0][this_squares.dataset.index_squares];
  OBJ_LINE[this_squares.dataset.name_line][0][this_squares.dataset.index_squares] = OBJ_LINE[last_btn.dataset.name_line][0][last_btn.dataset.index_squares];
  OBJ_LINE[last_btn.dataset.name_line][0][last_btn.dataset.index_squares] = saveItem;

  last_btn.dataset.num = OBJ_LINE[last_btn.dataset.name_line][0][last_btn.dataset.index_squares];
  this_squares.dataset.num = OBJ_LINE[this_squares.dataset.name_line][0][this_squares.dataset.index_squares];

  this_squares.textContent = OBJ_LINE[this_squares.dataset.name_line][0][this_squares.dataset.index_squares];
  last_btn.textContent = OBJ_LINE[last_btn.dataset.name_line][0][last_btn.dataset.index_squares];
  moves.textContent = count_moves;
  
}

export default fun_click_squares;