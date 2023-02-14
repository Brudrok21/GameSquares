import fun_create_history_list from './fun_create_history_list.js'
function saveCookie(name_q, save_q, COOKIE_INFO) {
  // COOKIE_INFO[name_q] = save_q;
  let date = new Date();
  date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
  let expires = "; expires=" + date.toUTCString();
  document.cookie = "COOKIE_INFO" + "=" + JSON.stringify(COOKIE_INFO) + expires + "; path=/";
  fun_create_history_list(COOKIE_INFO);
}export default saveCookie;