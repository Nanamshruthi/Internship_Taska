function convertTemp() {
  const temp = parseFloat(document.getElementById('temperature').value);
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(temp)) {
    resultDiv.textContent = "❗ Please enter a valid number.";
    return;
  }

  let result = "";

  switch(unit) {
    case "celsius":
      result = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F\nKelvin: ${(temp + 273.15).toFixed(2)} K`;
      break;
    case "fahrenheit":
      result = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C\nKelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
      break;
    case "kelvin":
      result = `Celsius: ${(temp - 273.15).toFixed(2)} °C\nFahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
      break;
  }

  resultDiv.textContent = result;
}
