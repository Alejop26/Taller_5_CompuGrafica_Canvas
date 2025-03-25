let campo = document.getElementById("dibujo4")
let lienzo = campo.getContext("2d")

//para hacer un gradient
const gradient = lienzo.createLinearGradient(0, 0, 300, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "yellow");

lienzo.fillStyle = gradient;
lienzo.fillRect(50, 400, 200, 100);


lienzo.shadowColor = "rgba(0, 0, 0, 0.5)";
lienzo.shadowBlur = 10;
lienzo.fillStyle = "purple";
lienzo.fillRect(100, 200, 100, 100);
