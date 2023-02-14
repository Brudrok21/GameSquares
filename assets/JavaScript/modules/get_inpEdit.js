function get_inpEdit() {
  let select_x = document.querySelector("#select_x");
  let select_y = document.querySelector("#select_y");

  function val(num) {
    num = (num <= 2 ? 2 : num);
    num = (num >= 9 ? 9 : num);
    return num;
  }
  select_x.addEventListener("change", () => {
    let num = Number(select_x.value);
    select_x.value = val(num);
  });
  select_y.addEventListener("change", () => {
    let num = Number(select_y.value);
    select_y.value = val(num);
  });


} export default get_inpEdit;