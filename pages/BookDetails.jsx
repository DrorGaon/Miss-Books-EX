import { bookservice } from "../services/book.service.js"

const {useState, useEffect} = React

export function BookDetails({bookId, onBack}){

    const [book, setBook] = useState(null)

    useEffect(() => {
        bookservice.get(bookId)
            .then(setBook)
            .catch(err => console.log(err))
    }, [])

    if (!book) return <h1>Loading...</h1>

    const {listPrice} = book

    return (
        <section className="book-details">
            <h2>Title: {book.title}</h2>
            <h2>Price: {listPrice.amount}{listPrice.symbol}</h2>
            <h2>Book summary:</h2>
            <p>{book.desc}</p>
            <img src={book.cover} alt="book-cover" />
            <button onClick={onBack}>Back</button>
        </section>
    )
}