const addBook = async(event) => {
    event.preventDefault();
    //need some handlgers here that are based off of button/ inputs in the html
    const book_title = document.querySelector('').value;
    const book_author = document.querySelector('').value;

    const response = await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify({
            book_title,
            book_author,
        }),
        header: { 'Content-Type': 'application/json' },
    })
    if (response.ok){
        document.location.replace('/profile')
    }else{
        alert(response.statusText);
    }

    //add your fetch request for the third party api
    

}

//will need to add the proper id here when we have it 
document.querySelector('').addEventListener('sumbit', addBook)

