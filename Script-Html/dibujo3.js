let campo = document.getElementById("dibujo2")
let lienzo = campo.getContext("2d")


lienzo.beginPath();
lienzo.moveTo(25, 25);
lienzo.lineTo(105, 25);
lienzo.lineTo(25, 105);
lienzo.fill();
lienzo.closePath()

//cuadrado
lienzo.beginPath()
lienzo.fillRect(140, 25, 100, 200);
lienzo.closePath()



lienzo.beginPath();
lienzo.moveTo(300, 25)
lienzo.lineTo(250, 100)
lienzo.lineTo(300, 100)
lienzo.fill()
lienzo.closePath()

lienzo.beginPath();
lienzo.fillRect(300, 25 , 100, 75);
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(400, 25)
lienzo.lineTo(400, 100)
lienzo.lineTo(450, 100)
lienzo.fill()
lienzo.closePath()

let x = 25;
let y = 200; 
let lado = 50; 

// Dibujar el hexágono
lienzo.beginPath();
lienzo.moveTo(x, y); 
lienzo.lineTo(x + lado, y - lado); 
lienzo.lineTo(x + 2 * lado, y);
lienzo.lineTo(x + 2 * lado, y + lado);
lienzo.lineTo(x + lado, y + 2 * lado);
lienzo.lineTo(x, y + lado);
lienzo.strokeStyle = "black";
lienzo.fill()
lienzo.lineWidth = 2;
lienzo.stroke();
lienzo.closePath();

