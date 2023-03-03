
const addBook = async (event) => {
    event.preventDefault();
    //need some handlgers here that are based off of button/ inputs in the html
    const book_title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    // let bookCover
    // let bookDescription

    const response = await fetch(`/api/books/${book_title}`, (data) => {
        console.log(data)
        const book_cover = data.book_cover
    })
    const jsonResponse = await response.json()
    // const bookCover = jsonResponse.bookCover
    // const bookDescription = jsonResponse.bookDescription
    console.log(jsonResponse)

    const response2 = await fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify({
                book_title,
                author,
                jsonResponse,
            }),
                headers: { 'Content-Type': 'application/json' },
        })
        if (response2.ok){
            document.location.replace('/profile')
         }else{
            alert(response2.statusText);
        }
}


//will need to add the proper id here when we have it 
document.querySelector('.new-book-form').addEventListener('submit', addBook)



