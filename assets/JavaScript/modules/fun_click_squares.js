 
let moves = document.querySelector("#moves"); 
function fun_click_squares(squares, OBJ_LINE, count_moves) { 
   
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
        fun_search_disabled(squares)
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
export default fun_click_squares;