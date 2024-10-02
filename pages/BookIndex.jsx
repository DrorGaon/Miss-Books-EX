const {useState, useEffect} = React

import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookservice } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export function BookIndex(){
    
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookservice.getFilterBy)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks(){
        bookservice.query(filterBy)
            .then(setBooks)
            .catch(err => console.log(err))
    }

    function onSetFilterBy(filterBy){
        setFilterBy(filterBy)
    }


    function onRemoveBook(bookId){
        bookservice.remove(bookId)
            .then(() => {
                setBooks(books => books.filter(book => book.id !== bookId))
                showSuccessMsg('Book removed successfuly')
            })
            .catch( err => {
                console.log(err)
                showErrorMsg(`problem removing book ${bookId}`)
            })
    }

    if (!books) return <h1>Loading</h1>
    return (
        <section className="book-index">
                 <React.Fragment >
                    <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy}/>
                    <BookList 
                    books={books} 
                    onRemoveBook={onRemoveBook}
                    />
                </React.Fragment>
        </section>
    )
}