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
    return (
        <section className="book-details">
            <h2>{book.title}</h2>
            <h2>{book.listPrice}</h2>
            <button onClick={onBack}>Back</button>
        </section>
    )
}