var boton = document.getElementById('enviar')
boton.addEventListener("click",cuadrante);
function cuadrante()
{
	var x = document.getElementById('punto1').value;
	var y = document.getElementById('punto2').value;

	if (x>0 && x<99999999 && y>0 && y<99999999)
	{
		alert('El cuadruante es: Q1')
	}
	else if (x>0 && x<99999999 && y<0 && y>-99999999) 
	{
		alert('El cuadruante es Q4')
	}
	else if (x<0 && x>99999999 && y>0 && y<99999999) 
	{
		alert('El cuadruante es Q2')
	}
	else if (x<0 && x>-99999999 && y<0 && y>-99999999) 
	{
		alert('El cuadruante es Q4')
	}
}