import { LongText } from "../cmps/LongText.jsx"
import { bookservice } from "../services/book.service.js"
const { useParams, Link } = ReactRouterDOM

const {useState, useEffect} = React

export function BookDetails(){

    const [book, setBook] = useState(null)
    const { bookId} = useParams()

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook(){
        bookservice.get(bookId)
            .then(setBook)
            .catch(err => {
                console.log(err)
                showErrorMsg(`Problem loading book ${bookId}`)
            })
    }

    if (!book) return <h1>Loading...</h1>

    const {listPrice, title, cover, desc, pageCount, publishedDate} = book
    const pageCountTxt = (pageCount > 500) ? 'Serious Reading' : (pageCount > 200) ? 'Descent Reading' : 'Light Reading'
    const year = new Date().getFullYear()
    const publishedDateTxt = (year - publishedDate >= 10) ? '(Vintage)' :  (year - publishedDate <= 1) ? '(New)' : ''
    const priceClass = (listPrice.price > 150) ? 'expensive' : (listPrice.price < 20) ? 'cheap' : ''

    return (
        <section className="book-details">
            <section>
                <h2>Title: {title}</h2>
                <h2>Price: <span className={priceClass}>{listPrice.price}{listPrice.symbol}</span></h2>
                <h2>Length: {pageCount} pages {`(${pageCountTxt})`}</h2>
                <h2>Book summary:</h2>
                <LongText txt={desc}/>
                <h2>Pusblished on {`${publishedDate} ${publishedDateTxt}`}</h2>
            </section>
            <img src={cover} alt="book-cover" />
            <Link to="/books"> <button>Back</button> </Link>
        </section>
    )
}