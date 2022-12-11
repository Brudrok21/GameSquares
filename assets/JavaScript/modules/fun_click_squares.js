import fun_confetti_animation from './fun_confetti_animation.js'


let moves = document.querySelector("#moves"),
timer_block = document.querySelector("#timer_block"),
CreateSquaresField = document.querySelector("#CreateSquaresField");  

function fun_click_squares(squares, OBJ_LINE, count_moves,ARR_GRID,timer) { 

  let maxLenghtnSquares = Number(select_x.value) * Number(select_y.value);
  const values = [...Array(maxLenghtnSquares -1)].map((_, i) => i + 1);
  values.push("x"); 
  console.log(values)

  if (squares !== undefined) {
    let first_btn;
    let last_btn;
    squares.forEach((this_squares) => { 
      this_squares.addEventListener("click", () => {
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
        fun_finish(ARR_GRID,values,timer);
        last_btn = ""; 
      });
    })
  }
}

function fun_search_disabled(squares) {
  squares.forEach((this_squares) => {
    if (this_squares.dataset.num == "x") {  
      this_squares.setAttribute("disabled", "disabled")
    } else {
      this_squares.removeAttribute("disabled")
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

function fun_finish(ARR_GRID,values,timer){  
  if(ARR_GRID.join() == values.join()){
    clearInterval(timer)
    timer_block.classList.add("vibrate-1");
    moves.classList.add("vibrate-1");
    CreateSquaresField.setAttribute("disabled", "disabled");
    fun_confetti_animation();
  } 
}
export default fun_click_squares;