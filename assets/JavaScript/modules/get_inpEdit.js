function get_inpEdit() {
  const select_x = document.querySelector("#select_x");
  const select_y = document.querySelector("#select_y"); 
  function val(num) {
    num = (num <= 2 ? 2 : num);
    num = (num >= 9 ? 9 : num);
    return num;
  }
  select_x.addEventListener("change", () => {
    const num = Number(select_x.value);
    select_x.value = val(num);
  });
  select_y.addEventListener("change", () => {
    const num = Number(select_y.value);
    select_y.value = val(num);
  });


} export default get_inpEdit;