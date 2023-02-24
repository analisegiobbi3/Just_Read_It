const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok){
        document.location.replace('/');
    }else{
        alert(response.statusText);
    }
}

//need to make sure the logout id matches our logout handler in the html
document.querySelector('#logout').addEventListener('click', logout)