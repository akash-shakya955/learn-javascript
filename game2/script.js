  var inputbtn = document.getElementById("input"); 

var userinput;

function inputHan(){
    
     let input =prompt("enter the input");
     userinput = input;
}

inputbtn.addEventListener("click",inputHan);


function clickx(userinput) {

    
    // let index = document.getElementById("number").value;

    document.getElementsByClassName("box")[userinput].getElementsByClassName("draw")[0].innerText = "x";  
    
    document.getElementById("btn1").disabled = true ;
    document.getElementById("btn2").enabled = false;

}

function click0(userinput) {
    
    // let index = document.getElementById("number").value;

    document.getElementsByClassName("box")[userinput].getElementsByClassName("draw")[0].innerText = "0";

    document.getElementById("btn1").enabled = false;
    document.getElementById("btn2").disabled = true;

}

