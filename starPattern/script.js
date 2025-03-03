function printStar() {
    let n = parseInt(document.getElementById("number").value);
    let resultbox = document.getElementById("resultbox");

    if (isNaN(n) || n < 3) {
        resultbox.innerText = "Please enter a valid number (minimum 3).";
        return;
    }

    let output = "";
    let width = 2 * n - 1; 
    let middle = Math.floor(n / 2); 

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < width; j++) {
           
            if (
                j === n - 1 - i || j === n - 1 + i || 
                (i === middle && j >= n - 1 - i && j <= n - 1 + i) || 
                j === n - 2 - i || j === n + i ||
                j === n - 1 - i + 1 || j === n - 1 + i - 1
            ) {
                output += "* ";
            } else {
                output += "  ";
            }
        }
        output += "\n";
    }

    resultbox.innerText = output;
}

function clearPattern() {
    document.getElementById("resultbox").innerText = "";
    document.getElementById("number").value = "";
}
