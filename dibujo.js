let campo=document.getElementById("dibujo")
let lienzo=campo.getContext('2d')//estamos llamando todas las propiedades y metodos del objeto CanvasRenderingContext2D



lienzo.beginPath()
lienzo.arc(150, 150, 150, 0, Math.PI * 2, true)
lienzo.strokeStyle = "green"
lienzo.stroke()
lienzo.closePath()

lienzo.beginPath()
lienzo.arc(350, 150, 150, 0, Math.PI * 2, true)
lienzo.strokeStyle = "blue"
lienzo.stroke()
lienzo.closePath()

lienzo.beginPath()
lienzo.arc(250, 350, 150, 0, Math.PI * 2, true)
lienzo.strokeStyle = "red"
lienzo.stroke()
lienzo.closePath()





