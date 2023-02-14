function fun_CreateSquaresField(OBJ_LINE, CreateSquaresField) {
  let keys = Object.keys(OBJ_LINE); 
  keys.forEach((this_key) => {
    CreateSquaresField.insertAdjacentHTML("beforeend", `
    <div class="d-flex line `+ this_key + `" data-name_line="` + this_key + `"></div>
    `);
  });

  for (let i = 0; i < CreateSquaresField.children.length; i++) {
    let this_child = CreateSquaresField.children[i];
    OBJ_LINE[this_child.dataset.name_line][0].map((num, index) => {
      this_child.insertAdjacentHTML("beforeend", `
      <div class="BoxForBtn">
        <button `+(num === "x" ? "disabled" : "active")+` data-num="` + num + `" data-name_line="` + this_child.dataset.name_line + `" data-index_squares="` + index + `" class="squares btn_style">` + num + `</button>
      </div>
      `);
    });
  } 
}export default fun_CreateSquaresField;