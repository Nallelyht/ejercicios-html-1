
alert("hola");
document.getElementById('fahrenheit')
function convertirCelsius(fahrenheit) {
  var cuantosGrados = 0;
  cuantosGrados = (fahrenheit/1.8)-32;
  return cuantosGrados;
}
convertirCelsius(fahrenheit);

function convertirFahrenheit(celsius) {
  var cuantosGrados = 0;
  cuantosGrados = (celsius*1.8)+32;
  return cuantosGrados;
}
convertirFahrenheit();
