let counter = -1;
function fun_create_history_list(COOKIE_INFO) {
  let setAdd; 
  let show_history = document.querySelector("#show_history");
  if (COOKIE_INFO.length === 0 || COOKIE_INFO == undefined) {
    show_history.dataset.visibility = "none";
  } else {
    show_history.dataset.visibility = "show";
    let div_history = document.querySelector("#history");
    // div_history.innerHTML = "";
    COOKIE_INFO.reverse();


    setAdd = setInterval(() => {
      if (counter !== COOKIE_INFO.length - 1) {
        counter++;
        let element = COOKIE_INFO[counter];

        div_history.insertAdjacentHTML("beforeend", `
          <div class="py-3 my-3 style_list_history">
            <div class="d-flex flex-wrap align-items-center justify-content-between">
              <span class="p-1"><b class="pe-2">Time Start:</b><time>${element.Local_time_start}</time></span>
              <span class="p-1"><b class="pe-2">Time Finish:</b><time>${element.Local_time_finish}</time></span>
              <span class="p-1"><b class="pe-2">Game Time:</b> <time>${element.Time}</time></span>
              
            </div>
            <div class="d-flex  justify-content-between align-items-center flex-wrap">
              <span class="p-1"><b class="pe-2">Date:</b>${element.Local_date}</span>
              <span class="p-1"><b class="pe-2">Moves:</b>${element.Moves}</span>
              <span class="p-1"><b class="pe-2">Maps:</b>${element.Maps}</span>
            </div> 
          </div> 
        `)
      } else { 
        clearInterval(setAdd);
      }
    }, 500);  
    COOKIE_INFO.reverse();
  }


} export default fun_create_history_list;