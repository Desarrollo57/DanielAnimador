const rightBtn = document.querySelector("#right");
const leftBtn = document.querySelector("#left");

const content = document.querySelector(".scrollingContainer");

 rightBtn.addEventListener("click", () =>{
    content.scrollLeft += 400;
 });

 leftBtn.addEventListener("click", () =>{
    content.scrollLeft -= 400;
 });