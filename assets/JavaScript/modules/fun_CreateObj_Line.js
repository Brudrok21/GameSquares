function fun_CreateObj_Line(select_x,select_y,OBJ_LINE,ARR_GRID){
  for (let i = 0; i < Number(select_x.value); i++) {
    OBJ_LINE["line_" + i] = new Array;
    OBJ_LINE["line_" + i].push(ARR_GRID[i]);
  }
}export default fun_CreateObj_Line;