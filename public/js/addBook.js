// import bookAPI from 'book-api'
import bookAPI from 'book-api';

const addBook = async(event) => {
    event.preventDefault();

    //need some h here that are based off of button/ inputs in the html
    const book_title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;

    let getBookData = await function(book_title){ 
        const {Akademibokhandeln, Adlibris} = bookAPI
        const source = new Adlibris();
    
        // Search for books
        source.search(book_title)
        .then(books => {
            source.fetch(books[0]).then(book => {
                console.log(JSON.stringify(book, null, 2));
                let bookCover = books[0].cover
                let bookDescription = books[0].description
                console.log(bookCover)
                console.log(bookDescription)
                fetch('/api/books', {
                    method: 'POST',
                    body: JSON.stringify({
                        book_title,
                        author,
                        bookCover,
                        bookDescription,
                    }),
                    headers: { 'Content-Type': 'application/json' },
                })
                if (response.ok){
                    document.location.replace('/profile')
                }else{
                    alert(response.statusText);
                }
            }); 
        });
    }
    getBookData(book_title)
}



// const addBook = async(event) => {
//     event.preventDefault();
//     //need some handlgers here that are based off of button/ inputs in the html
//     const book_title = document.querySelector('#book-title').value;
//     const author = document.querySelector('#book-author').value;

//     const response = await fetch('/api/books', {
//         method: 'POST',
//         body: JSON.stringify({
//             book_title,
//             author,
//         }),
//         headers: { 'Content-Type': 'application/json' },
//     })
//     if (response.ok){
//         document.location.replace('/profile')
//     }else{
//         alert(response.statusText);
//     }
    
// }


//will need to add the proper id here when we have it 
document.querySelector('.new-book-form').addEventListener('submit', addBook)



