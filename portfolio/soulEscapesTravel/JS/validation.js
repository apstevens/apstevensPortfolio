document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('query-form');

        form.addEventListener('submit', function(event) {
        let valid = true;

        // Validate name
        const nameInput = form.querySelector('#name');
        const nameError = form.querySelector('#name-error');
        const nameValidated = form.querySelector('#name-valid');

        if (!nameInput.value.trim() || !isNaN(nameInput.value.trim())) {
            valid = false;
            nameInput.classList.add('invalid');
            nameError.textContent = 'Please enter a valid name';
        } else {
            nameInput.classList.remove('invalid');
            nameInput.classList.add('valid');
            nameValidated.textContent = '✓';
        }

        // Validate email
        const emailInput = form.querySelector('#email');
        const emailError = form.querySelector('#email-error');
        const emailValidated = form.querySelector('#email-valid');

        if (!isValidEmail(emailInput.value)) {
            valid = false;
            emailInput.classList.add('invalid');
            emailError.textContent = 'Please enter a valid email e.g. test@gmail.com';
        } else {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            emailValidated.textContent = '✓';
        }

        const numInput = form.querySelector('#mobile');
        const numError = form.querySelector('#num-error');
        const numValidated = form.querySelector('#num-valid');

        if (!/^\d+$/.test(numInput.value.trim())) {
            valid = false;
            numInput.classList.add('invalid');
            numError.textContent = 'Please enter a valid number';
        } else {
            numInput.classList.remove('invalid')
            numInput.classList.add('valid');
            numValidated.textContent = '✓';
        }

        const destinationInput = form.querySelector('#destination');
        const destinationError = form.querySelector('#dest-error');
        const destinationValidated = form.querySelector('#dest-valid');

        if (!destinationInput.value.trim() || !isNaN(destinationInput.value.trim())) {
            valid = false;
            destinationInput.classList.add('invalid');
            destinationError.textContent = 'Destination cannot be empty';
        } else {
            destinationInput.classList.remove('invalid');
            destinationInput.classList.add('valid');
            destinationValidated.textContent = '✓';
        }

        const departInput = form.querySelector('#departure');
        const departError = form.querySelector('#dep-error');
        const departValidated = form.querySelector('#dep-valid');

        if (!departInput.value.trim() || !isNaN(departInput.value.trim())) {
            valid = false;
            departInput.classList.add('invalid');
            departError.textContent = 'Departure cannot be blank';
        } else {
            departInput.classList.remove('invalid');
            departInput.classList.add('valid');
            departValidated.textContent = '✓';
        }

        const numTravellerInput = form.querySelector('#numOfTravellers');
        const numtravellerError = form.querySelector('#travel-error');
        const numTravellerValidated = form.querySelector('#travel-valid');

        if (!numTravellerInput.value.trim() || !isNaN(numTravellerInput.value.trim())) {
            valid = false;
            numTravellerInputdepartInput.classList.add('invalid');
            numtravellerError.textContent = 'Departure cannot be blank';
        } else {
            numTravellerInput.classList.remove('invalid');
            numTravellerInput.classList.add('valid');
            numTravellerValidated.textContent = '✓';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}