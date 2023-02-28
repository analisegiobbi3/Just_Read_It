const editBook = async(event) => {
    event.preventDefault();
    //need some handlgers here that are based off of button/ inputs in the html
    const book_title = document.querySelector('input[name="edit-book-title"]').value.trim();
    const book_author = document.querySelector('input[name="edit-author-name"]').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    const response = await fetch(`/api/books/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            book_title,
            book_author,
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok){
        document.location.replace('/profile')
    }else{
        alert(response.statusText);
    }
}

document.querySelector('#submit-edit-post').addEventListener('submit', editBook)