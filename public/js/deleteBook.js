const deleteBook = async(event) => {
    event.preventDefault();
    //need some handlgers here that are based off of button/ inputs in the html
    const id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            book_id: id
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
document.querySelector('#delete-post').addEventListener('click', deleteBook)