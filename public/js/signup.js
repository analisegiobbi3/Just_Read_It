const signupFormHandler = async (event) => {
    event.preventDefault();

    // collect the values from the sign up form 
    const username = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();

    if (username && password) {
         // send a POST request to the API endpoint 
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
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

document
      .querySelector('.signup-form')
      .addEventListener('submit', signupFormHandler);

