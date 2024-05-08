n=prompt("Digite n: ")
const e = 2.71828182845;
nFac=Math.sqrt(2*Math.PI*n)*Math.pow((n/e),n);
document.getElementById("resultado").innerHTML = "Aproximación del factorial: " + nFac.toFixed(2);
