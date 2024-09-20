import { bookservice } from "../services/book.service.js"

const {useState, useEffect} = React

export function BookDetails({bookId, onBack}){

    const [book, setBook] = useState(null)

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook(){
        bookservice.get(bookId)
        .then(setBook)
        .catch(err => console.log(err))
    }

    if (!book) return <h1>Loading...</h1>

    const {listPrice, title, cover, desc, pageCount} = book
    const pageCountTxt = (pageCount > 500) ? 'Serious Reading' : (pageCount > 200) ? 'Descent Reading' : 'Light Reading'

    return (
        <section className="book-details">
            <h2>Title: {title}</h2>
            <h2>Price: {listPrice.price}{listPrice.symbol}</h2>
            <h2>Length: {pageCount} pages {`(${pageCountTxt})`}</h2>
            <h2>Book summary:</h2>
            <p>{desc}</p>
            <img src={cover} alt="book-cover" />
            <button onClick={onBack}>Back</button>
        </section>
    )
}