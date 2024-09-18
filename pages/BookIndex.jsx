const {useState, useEffect} = React

import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookservice } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"

export function BookIndex(){
    
    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [filterBy, setFilterBy] = useState(bookservice.getFilterBy)

    useEffect(() => {
        bookservice.query(filterBy)
            .then(setBooks)
            .catch(err => console.log(err))
    }, [filterBy])

    function setBookToDisplay(bookId){
        setSelectedBookId(bookId)
    }

    function onSetFilterBy(filterBy){
        setFilterBy(filterBy)
    }

    function onBack(){
        setSelectedBookId(null)
    }

    if (!books) return <h1>Loading</h1>
    return (
        <section className="book-index">
            {selectedBookId
                ? <BookDetails bookId={selectedBookId} onBack={onBack}/>
                : <React.Fragment >
                    <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy}/>
                    <BookList 
                    books={books} 
                    setBookToDisplay={setBookToDisplay}
                    />
                </React.Fragment>
            }
        </section>
    )
}