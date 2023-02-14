import fun_confetti_animation from './fun_confetti_animation.js'
import get_finish_animation from "./get_finish_animation.js"
import saveCookie from "./saveCookie.js"

let Save_cookie = document.querySelector("#Save_cookie")
function fun_finish(ARR_GRID, select_x, select_y, timer, OBJ, COOKIE_INFO, count_min, count_sec, Local_time_start) {
  let moves = document.querySelector("#moves");
  let maxLenghtnSquares = Number(select_x.value) * Number(select_y.value);
  const values = [...Array(maxLenghtnSquares - 1)].map((_, i) => i + 1);
  values.push("x");
  let name_q;
  let save_q;
  let date = new Date();
  let saveHistory;

  if (ARR_GRID.join() == values.join()) {
    clearInterval(timer)
    timer_block.classList.add("vibrate-1");
    moves.classList.add("vibrate-1");
    CreateSquaresField.setAttribute("disabled", "disabled");
    // fun_confetti_animation();
    get_finish_animation();

    if (Save_cookie.checked == true) {
      saveHistory = {
        Maps: select_x.value + " x " + select_y.value,
        Time: (count_min < 10 ? '0' + count_min : count_min) + ":" + (count_sec < 10 ? '0' + count_sec : count_sec),
        Moves: OBJ.count_moves,
        Local_date: date.toLocaleDateString(),
        Local_time_finish: date.toLocaleTimeString(),
        Local_time_start: Local_time_start,
      }

      if (COOKIE_INFO.length == 10 || COOKIE_INFO.length >= 10) {
        COOKIE_INFO.splice(0, 1);
      }

      COOKIE_INFO.push(saveHistory);
      name_q = "history";
      save_q = COOKIE_INFO.history;
      saveCookie(name_q, save_q, COOKIE_INFO);
    }
    setTimeout(() => {
      timer_block.classList.remove("vibrate-1");
      moves.classList.remove("vibrate-1");
    }, 500);
  }

} export default fun_finish;