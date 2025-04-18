


export function printStar() {
    let num = document.getElementById("number").value;
    let resultBox = document.getElementById("resultbox");
    
    if (num === "" || num <= 0) {
        resultBox.innerHTML = "Please enter a valid number!";
        return;
    }

    let pattern = "";
    for (let i = 1; i <= num; i++) {
        pattern += "* ".repeat(i) + "\n";
    }

    resultBox.innerText = pattern;
}

export function clearPattern() {
    document.getElementById("number").value = "";
    document.getElementById("resultbox").innerHTML = "";
}
