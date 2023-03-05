const editBook = async(event) => {
    event.preventDefault();
    //need some handlgers here that are based off of button/ inputs in the html
    const book_title = document.querySelector('#edit-title').value.trim();
    const author = document.querySelector('#edit-author').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    const response = await fetch(`/api/books/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            book_title,
            author,
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok){
        document.location.replace('/profile')
    }else{
        alert(response.statusText);
    }
}

document.querySelector('#submit-edit-post').addEventListener('click', editBook)