// Get the feedback div element so we can do something with it.
const feedbackElement = document.getElementById('feedback');

// Get the form so we can read what was entered in it.
const formElement = document.getElementById('contactForm');

// Add a listener to wait for a submission of our form. When that happens run the code below.
formElement.addEventListener('submit', function(e) {
    // Stop the form from doing the default action.
    e.preventDefault();

    // Create a FormData object and append the form data to it
    const formData = new FormData(formElement);

    // Convert the FormData object to a query string
    const queryString = new URLSearchParams(formData).toString();

    // Send the form data to the server using fetch
    fetch('https://formspree.io/mclee3462@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Set the contents of our feedback element to a message letting the user know the form was submitted successfully.
        feedbackElement.innerHTML = `Hello ${formData.get('name')}! Thank you for your message. We will get back with you as soon as possible!`;
        // Make the feedback element visible.
        feedbackElement.style.display = "block";
        // Add a class to move everything down so our message doesn't cover it.
        document.body.classList.toggle('moveDown');
    })
    .catch(error => {
        console.error('There was an error submitting the form', error);
        feedbackElement.innerHTML = 'There was an error submitting the form. Please try again later.';
        feedbackElement.style.display = "block";
        document.body.classList.toggle('moveDown');
    });
});
