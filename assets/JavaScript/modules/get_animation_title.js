function get_animation_title(){
  const main_container = document.querySelector("#main_container");
  const cube_border = document.querySelectorAll(".cube_border");
  const styleArr = ["gradient-Summer_Dog","gradient-Purpink","gradient-Wiretap","gradient-By_Design","gradient-Cool_Sky","gradient-Snapchat","gradient-Ohhappiness","gradient-Argon","gradient-Memariani","gradient-Dance_To_Forget"];

  let thisStyle_container = Math.floor(Math.random() * styleArr.length);
 
  for(let i = 0; i < main_container.attributes.length; i++){
    if(main_container.attributes[i].name == "color"){
      main_container.attributes[i].value = styleArr[thisStyle_container];
    }
  }
  cube_border.forEach((this_cube)=>{ 
    thisStyle_container = Math.floor(Math.random() * styleArr.length);
    for(let i = 0; i < this_cube.attributes.length; i++){
      if(this_cube.attributes[i].name == "color"){ 
        this_cube.attributes[i].value = styleArr[thisStyle_container];
      }
    }
  });
   

}export default get_animation_title;