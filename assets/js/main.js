
function calcPrice() {
    // Get user distance
    var distance = document.getElementById('distance').value;

    // Check for user age
    var age = document.getElementById('age').value;

    // Empty final price which will be calculated
    var finalPrice;

    // The price is 0.21$ per km
    var pricePerKm = 0.21;

    // Multiplies the user distance times the price per km
    var ticketPrice = (distance * pricePerKm);

    // Creates a discount for underage people
    var discountUnderAge = (ticketPrice / 100) * 20;

    // Creates a discount for seniors
    var discountSenior = (ticketPrice / 100) * 40;

    // Prints the random cpcode generated
    document.getElementById('cp_code').innerHTML = randomNumber(2000, 9000)

    // Prints the random seat number generated
    document.getElementById('seat').innerHTML = randomNumber(1, 20)

    // Ask user name
    var userName = document.getElementById('user_name').value;
    // Prints the user name 
    document.getElementById('passenger').innerHTML = userName;


    if (age === "minorenne") {
        finalPrice = ticketPrice - discountUnderAge
        return document.getElementById('ticket_price').innerHTML = finalPrice.toFixed(2) + '£',
            document.getElementById('discount').innerHTML = "Sconto minorenne ";

    } else if (age === "adulto") {
        finalPrice = ticketPrice
        return document.getElementById('ticket_price').innerHTML = finalPrice.toFixed(2) + '£',
            document.getElementById('discount').innerHTML = "Nessuno sconto applicato ";
    } else if (age === "senior") {
        finalPrice = ticketPrice - discountSenior
        return document.getElementById('ticket_price').innerHTML = finalPrice.toFixed(2) + '£',
            document.getElementById('discount').innerHTML = "Sconto senior "
    }
}

// Generates a random number for the CP Code and the seat number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Actives the function when  submit is clicked
document.getElementById('submit').addEventListener("click", calcPrice)

// Resets the inputs when clicked
function resetForm() {
    document.getElementById('data_form').reset()
}
document.getElementById('reset_form').addEventListener('click', resetForm)
