import get_victory from "./get_victory.js";

const doc_moves = document.querySelector("#moves");
export default function get_click_squares(MainOBJ) {
  const squares = document.querySelectorAll(".squares");  
  
  squares.forEach((squar, id) => {  
    squar.addEventListener("click", () => {
      const squarX = MainOBJ.mixed_length.indexOf("x");  

      if(id + 1 === squarX || id - 1 === squarX || id + MainOBJ.y === squarX || id - MainOBJ.y === squarX){
        
        MainOBJ.mixed_length.splice(squarX, 1, MainOBJ.mixed_length[id]);
        MainOBJ.mixed_length.splice(id, 1 ,  "x");
        
        squares[squarX].removeAttribute("disabled")
        squares[squarX].setAttribute("active","active") 
        squar.removeAttribute("active")
        squar.setAttribute("disabled","disabled")
        squares[squarX].textContent = MainOBJ.mixed_length[squarX];
        squar.textContent = MainOBJ.mixed_length[id];

        MainOBJ.moves ++;
        doc_moves.textContent = MainOBJ.moves; 

        // Adding the socketTrue class if the cube is in its place
        if(MainOBJ.asstd_length[squarX] === MainOBJ.mixed_length[squarX]){
          squares[squarX].classList.add("socketTrue"); 
        }else{
          squares[id].classList.remove("socketTrue");
        }

        get_victory(MainOBJ)
      } 
    });
  });

  console.dir(MainOBJ);
  //socketTrue
}

