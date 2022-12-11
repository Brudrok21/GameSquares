function fun_CreateRandomArrGrid (select_x,select_y,ARR_GRID){
  let Arr_RandomSquaresNum = new Array();
  let maxLenghtnSquares = Number(select_x.value) * Number(select_y.value);
  const values = [...Array(maxLenghtnSquares -1)].map((_, i) => i + 1);
  values.push("x");   
  Arr_RandomSquaresNum = [...Array(maxLenghtnSquares)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0]); 



  for (let i = 0; i < Arr_RandomSquaresNum.length; i += Number(select_y.value)) {
    const chunk = Arr_RandomSquaresNum.slice(i, i + Number(select_y.value));
    ARR_GRID.push(chunk);
  }
   
}export default fun_CreateRandomArrGrid;