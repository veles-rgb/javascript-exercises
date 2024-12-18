const convertToCelsius = function(tempf) {
// x °F ≘ (x − 32) × ⁠5/9⁠ °C 
let celsius = (tempf - 32) * (5/9);
let celsiusRounded = Math.round(celsius * 10) / 10;
return celsiusRounded;
};

const convertToFahrenheit = function(tempc) {
  // x °C ≘ (x × ⁠9/5⁠ + 32) °F 
  let fahrenheit = (tempc * 9/5) + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
