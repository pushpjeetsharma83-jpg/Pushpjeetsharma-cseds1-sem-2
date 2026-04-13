function convertTemp() {
            let kelvin = document.getElementById("kelvin").value;

            if (kelvin === "") {
                document.getElementById("result").innerHTML = "Please enter a value!";
                return;
            }

            let fahrenheit = ((parseFloat(kelvin) - 273.15) * 9/5) + 32;

            document.getElementById("result").innerHTML =
                kelvin + " Kelvin = " + fahrenheit.toFixed(2) + " °F";
        }