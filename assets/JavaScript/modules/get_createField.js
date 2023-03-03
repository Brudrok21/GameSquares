const select_x = document.querySelector("#select_x");
const select_y = document.querySelector("#select_y");
const CreateSquaresField = document.querySelector("#CreateSquaresField");
const doc_moves = document.querySelector("#moves");

export default function createField(MainOBJ) {
  AddInObject(MainOBJ)

  CreateSquaresField.innerHTML = "";

  MainOBJ.chunk.forEach((arr, id) => {
    CreateSquaresField.insertAdjacentHTML("beforeend", `
    <div class="d-flex line"></div>`);
    arr.forEach((num, index) => { 
      let mixed = MainOBJ.mixed_length.indexOf(num);
      let asstd = MainOBJ.asstd_length.indexOf(num);
      CreateSquaresField.children[id].insertAdjacentHTML("beforeend", `
      <div class="BoxForBtn">
      <button ${(num === "x" ? `disabled="disabled"` : `active="active"`)} class="squares btn_style ${mixed === asstd ? "socketTrue" : ""}">${num}</button>
      </div>
      `)
    });
  }); 
}
 
function AddInObject(MainOBJ) {
  const date = new Date();
  MainOBJ.Local_time_start = date.toLocaleTimeString();
  MainOBJ.x = Number(select_x.value);
  MainOBJ.y = Number(select_y.value);
  MainOBJ.moves = 0;
  MainOBJ.win = false;
  doc_moves.textContent = MainOBJ.moves;

  const Arr_RandomSquaresNum = new Array();
  const maxLenghtnSquares = Number(select_x.value) * Number(select_y.value);
  const values = [...Array(maxLenghtnSquares - 1)].map((_, i) => i + 1);
  values.push("x");

  MainOBJ.asstd_length = [...values];
  Arr_RandomSquaresNum.push(...values);
  Arr_RandomSquaresNum.sort(() => Math.random() - 0.5);
  MainOBJ.mixed_length = [...Arr_RandomSquaresNum]; 

  MainOBJ.chunk = new Array();
  for (let i = 0; i < Arr_RandomSquaresNum.length; i += Number(select_y.value)) {
    const chunk = Arr_RandomSquaresNum.slice(i, i + Number(select_y.value));
    MainOBJ.chunk.push(chunk);
  }
}

/*
  MainOBJ.chunk.forEach((arr, id) => {
    const line = document.createElement("div");
    line.classList.add("d-flex",`line`, `line_${id}`);
    line.setAttribute("data-name_line", `line_${id}`);
    CreateSquaresField.appendChild(line);

    arr.forEach((num, index) => {
      const boxForBtn = document.createElement("div");
      boxForBtn.classList.add("BoxForBtn");

      const button = document.createElement("button");
      button.classList.add("squares", "btn_style");
      button.setAttribute("data-num", num);
      button.setAttribute("data-name_line", `line_${id}`);
      button.setAttribute("data-index_squares", index);
      button.disabled = num === "x" ? true : false;
      button.innerText = num;

      boxForBtn.appendChild(button);
      line.appendChild(boxForBtn);
    });
  });  
*/

