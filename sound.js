const audioOne = new Audio("sounds/confirm.mp3");
const audioTwo = new Audio("sounds/select.mp3");
const link = document.querySelectorAll("a.link"); //Returns a list with ALL the elements containing the link class
for(element of link){
  element.addEventListener("click", audioOne.play);
  element.addEventListener("mouseover", audioTwo.play);
};