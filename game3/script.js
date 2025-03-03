
function clickx() {
    
    let index = document.getElementById("number").value;

    document.getElementsByClassName("box")[index].getElementsByClassName("draw")[0].innerText = "x";  
    
    document.getElementById("btn1").disabled = true ;
    document.getElementById("btn2").enabled = false;

}

function click0() {
    
    let index = document.getElementById("number").value;

    document.getElementsByClassName("box")[index].getElementsByClassName("draw")[0].innerText = "0";

    document.getElementById("btn1").enabled = false;
    document.getElementById("btn2").disabled = truer;

}



