export default function get_loadLocalStorage(MainOBJ){ 
  if(JSON.parse(localStorage.getItem("History")) !== null){
    MainOBJ.History = [... JSON.parse(localStorage.getItem("History"))];
    Create_history_list(MainOBJ.History)
  } 
}


let counter = -1;
let show_history = document.querySelector("#show_history");
let div_history = document.querySelector("#history");
function Create_history_list(Arr) { 
  show_history.dataset.visibility = "show";
    let setAdd = setInterval(() => {
      if (counter !== Arr.length - 1) {
        counter++;
        let element = Arr[counter];

        div_history.insertAdjacentHTML("beforeend", `
          <div class="py-3 my-3 style_list_history">
            <div class="d-flex flex-wrap align-items-center justify-content-between">
              <span class="p-1"><b class="pe-2">Time Start:</b><time>${element.Local_time_start}</time></span>
              <span class="p-1"><b class="pe-2">Time Finish:</b><time>${element.Local_time_finish}</time></span>
              <span class="p-1"><b class="pe-2">Game Time:</b> <time>${(element.time === "undefined:undefined" ? "00:00" : element.time)}</time></span>
              
            </div>
            <div class="d-flex  justify-content-between align-items-center flex-wrap">
              <span class="p-1"><b class="pe-2">Date:</b>${element.Local_date}</span>
              <span class="p-1"><b class="pe-2">Moves:</b>${element.moves}</span>
              <span class="p-1"><b class="pe-2">Maps:</b>${element.map}</span>
            </div> 
          </div> 
        `)
      } else { 
        clearInterval(setAdd);
      }
    }, 500);   
}