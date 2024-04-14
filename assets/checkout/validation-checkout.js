// Function to validate the form fields
function validateForm() {
    // Get form elements
    var cardNumber = document.getElementById('card-num');
    var cardName = document.getElementById('name');
    var expiryDate = document.getElementById('date');
    var cvv = document.getElementById('CVV');
    var addressLine1 = document.getElementById('add-line1');
    var townCity = document.getElementById('town');
    var zipCode = document.getElementById('zipc');
    var firstName = document.getElementById('fname');
    var lastName = document.getElementById('lname');
    var phoneNumber = document.getElementById('phone_no');
    var email = document.getElementById('email');
    var totalPrice = document.getElementById('cartAmount');

    // Flag to track if all fields are valid
    var isValid = true;

    // Regular expressions for validation
    var cardNumberRegex = /^[0-9]{16}$/;
    var expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    var cvvRegex = /^[0-9]{3,4}$/;
    var zipCodeRegex = /^[0-9]{5}$/;
    var phoneNumberRegex = /^[0-9]{10}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate card number
    if (!cardNumberRegex.test(cardNumber.value)) {
        alert('Please enter a valid card number.');
        isValid = false;
    }

    // Validate cardholder name
    if (cardName.value.trim() === '') {
        alert('Please enter the cardholder name.');
        isValid = false;
    }

    // Validate expiry date
    if (!expiryDateRegex.test(expiryDate.value)) {
        alert('Please enter a valid expiry date (MM/YY).');
        isValid = false;
    }

    // Validate CVV
    if (!cvvRegex.test(cvv.value)) {
        alert('Please enter a valid CVV.');
        isValid = false;
    }

    // Validate address line 1
    if (addressLine1.value.trim() === '') {
        alert('Please enter address line 1.');
        isValid = false;
    }

    // Validate town/city
    if (townCity.value.trim() === '') {
        alert('Please enter town/city.');
        isValid = false;
    }

    // Validate zip code
    if (!zipCodeRegex.test(zipCode.value)) {
        alert('Please enter a valid zip code.');
        isValid = false;
    }

    // Validate first name
    if (firstName.value.trim() === '') {
        alert('Please enter first name.');
        isValid = false;
    }

    // Validate last name
    if (lastName.value.trim() === '') {
        alert('Please enter last name.');
        isValid = false;
    }

    // Validate phone number
    if (!phoneNumberRegex.test(phoneNumber.value)) {
        alert('Please enter a valid phone number.');
        isValid = false;
    }

    // Validate email
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if(isValid){
        alert("Order Confirmed!\n" + "Name: " + firstName.value + " " + lastName.value + "\n" + "Order ID: 564783");
    }
    return isValid;
}