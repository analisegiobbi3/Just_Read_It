const signupFormHandler = async (event) => {
    event.preventDefault();

    // collect the values from the sign up form 
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
         // send a POST request to the API endpoint 
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // if successful, redirect the browser to the profile page 
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
}; 

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

