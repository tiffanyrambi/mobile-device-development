// konversi suhu dari fahrenheit ke celcius
export function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F = ' + fToCel + '\xB0C.';
    console.log(message);
} 