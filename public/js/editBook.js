const editBook = async(event) => {
    event.preventDefault();
    //need some handlgers here that are based off of button/ inputs in the html
    const book_title = document.querySelector('').value;
    const book_author = document.querySelector('').value;
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

//will need to add the proper id here when we have it 
// may need to edit submit and make it click 
document.querySelector('').addEventListener('submit', editBook)