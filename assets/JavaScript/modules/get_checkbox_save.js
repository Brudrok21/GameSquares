import get_saveLocalStorage from './get_saveLocalStorage.js';
const checkbox_save = document.querySelector("#checkbox_save");
export default function get_checkbox_save(){
  checkbox_save.checked = (localStorage.getItem('checkbox_save') === null ? false : JSON.parse(localStorage.getItem('checkbox_save')));
  checkbox_save.addEventListener("click", ()=>{ 
    get_saveLocalStorage("checkbox_save", checkbox_save.checked);
  })
}