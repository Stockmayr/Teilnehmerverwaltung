window.addEventListener('load', () => {
    let num = 1;
document.getElementById("1").addEventListener('click',function(){select(num)}) 

});


function select(num) {
    document.getElementById(num).style.backgroundColor = "red";

    if (document.getElementById(num).style.backgroundColor === "red") {
        document.getElementById(num).style.backgroundColor = "white";
    }
    
}
