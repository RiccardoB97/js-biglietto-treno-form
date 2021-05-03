
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

    if (age === "minorenne") {
        finalPrice = ticketPrice - discountUnderAge
        return finalPrice
    } else if (age === "adulto") {
        finalPrice = ticketPrice
        return finalPrice
    } else if (age === "senior") {
        finalPrice = ticketPrice - discountSenior
        return finalPrice
    }
    document.getElementById('ticket_price').innerHTML = finalPrice;


}

document.getElementById('submit').addEventListener("click", calcPrice)

// Ask user name
var userName = document.getElementById('user_name').value;
document.getElementById('passenger').innerHTML = userName;