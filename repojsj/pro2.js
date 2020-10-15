
var boton = document.getElementById('enviar')
boton.addEventListener("click",volumen);
function volumen()
{
	var x = document.getElementById("punto1").value;
	var d = Math.pow(x, 3);
	var r = (4/3.0)*3.14159*d;
	 
	alert('EL VOLUMEN ES:'+r);
}