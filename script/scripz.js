let namesLeft = new Array();
let namesRight = new Array();

window.addEventListener("load", () => {
let right = document.getElementById("right-wrapper");
let left = document.getElementById("left-wrapper");

let students = [
    "Thomas Adlesgruber",
    " Sebastian Scholl",
    "Peter Ratzenböck ",
    "Dominik Luger ",
    " FabianStockmayr",
    "Hanna Wachtveitl"

];

for (let i = 0; i < students.length; i++) {
   namesLeft[i] = document.createElement("div");
   namesLeft[i].textContent = students[i];
   namesLeft[i].addEventListener("click", clickManager);
   left.appendChild(namesLeft[i]);
    
}
});

window.onload = () => {
    document.getElementById("left").addEventListener("click", function() {
       let right = document.getElementById("right-wrapper");
        let left = document.getElementById("left-wrapper");
        
        moveElements(right, left);
    });

    document.getElementById("right").addEventListener("click", () => {

        let right
    })


}