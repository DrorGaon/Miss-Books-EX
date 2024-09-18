const {useState, useEffect} = React

import { BookList } from "../cmps/BookList.jsx"
import { bookservice } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"

export function BookIndex(){
    
    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)

    useEffect(() => {
        bookservice.query()
            .then(setBooks)
            .catch(err => console.log(err))
    }, [])

    function setBookToDisplay(bookId){
        setSelectedBookId(bookId)
    }

    function onBack(){
        setSelectedBookId(null)
    }

    if (!books) return <h1>Loading</h1>
    return (
        <section className="book-index">
            {selectedBookId
                ? <BookDetails bookId={selectedBookId} onBack={onBack}/>
                : <BookList 
                    books={books} 
                    setBookToDisplay={setBookToDisplay}
                />
            }
        </section>
    )
}