const {useState, useEffect} = React

import { BookList } from "../cmps/BookList.jsx"
import { bookservice } from "../services/book.service.js"

export function BookIndex(){
    
    const [books, setBooks] = useState(null)

    useEffect(() => {
        bookservice.query()
            .then(setBooks)
            .catch(err => console.log(err))
    }, [])

    if (!books) return <h1>Loading</h1>
    return (
        <section className="book-index">
            <BookList books={books}/>
        </section>
    )
}