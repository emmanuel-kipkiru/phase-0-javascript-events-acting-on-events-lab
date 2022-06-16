// Your code here
const dodger = document.getElementById("dodger")

function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace("px","");
    const left = parseInt(leftNumber, 10);

    if (left>0){
        dodger.style.left = `${left - 1}px`;
    }   
}
function moveDodgerRight(){
    const leftNumbers=dodger.style.left.replace("px", "");
    const left =parseInt(leftNumbers, 10);

    if (left>0){
         dodger.style.left = `${left + 1}px`;
     }
}
document.addEventListener("keydown", function(e){
    if(e.key === "arrowleft"){
        moveDodgerLeft();
    }
});
document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});