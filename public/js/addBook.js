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
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok){
        document.location.replace('/profile')
    }else{
        alert(response.statusText);
    }

    const getBookAPI = (booktitle) => {
        let goodreadsURL = ''
        fetch(goodreadsURL).then(function(data){
            console.log(data)
            var bookCover = data[0]
        })
    }



    //add your fetch request for the third party api
    

}

//will need to add the proper id here when we have it 
document.querySelector('').addEventListener('sumbit', addBook)

