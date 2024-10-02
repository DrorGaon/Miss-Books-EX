import { bookservice } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookEdit(){

    const [book, setBook] = useState(bookservice.getEmptybook())
    const { bookId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(bookId) loadBook()
    }, [])

    function loadBook(){
        bookservice.get(bookId)
            .then(setBook)
            .catch(err => {
                console.log(err)
                showErrorMsg(`Problem loading book ${bookId}`)
            })
    }

    function handleChange({target}){
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
        }

        switch (field) {
            case 'title':
            case 'desc':
            case 'lang':
            case 'author':
            case 'pageCount':
            case 'publishedDate':
                setBook(prevBook => ({...prevBook, [field]: value}))
                break;
            case 'price': 
            case 'symbol': 
            case 'isOnSale': 
                setPrice(field, value)
                break;
            case 'genre':
                setGenres(value)
                break;
        }
    }

    function setPrice(field, value){
        let {listPrice} = book
        listPrice = {...listPrice, [field]: value}
        setBook(prevBook => ({...prevBook, listPrice}))
    }

    function setGenres(value){
        const genres = value.split(',')
        setBook(prevBook => ({...prevBook, genres}))
    }

    function onSave(ev){
        ev.preventDefault()
        bookservice.save(book)
            .then(book => {
                showSuccessMsg(`Book added successfully, ID: ${book.id}`)
            })
            .catch( err => {
                console.log(err)
                showErrorMsg(`problem adding book`)
            })
            .finally(navigate('/books'))
    }

    const {title, listPrice, genres, author, pageCount, publishedDate} = book
    const {price, symbol, isOnSale} = listPrice
    const msg = bookId ? 'Edit book' : 'Add book'
    
    return (
        <section className="book-edit">
            <h1>{msg}</h1>
            <form onSubmit={onSave} autoComplete="off">
                <label htmlFor="title">Title:</label>
                <input value={title} onChange={handleChange} type="text" name="title" id="title" />                    
                <label htmlFor="price">Price:</label>
                <input value={price || ''} onChange={handleChange} type="number" name="price" id="price" />
                <label htmlFor="symbol">Currency:</label>
                <select value={symbol || ''} onChange={handleChange} type="number" name="symbol" id="symbol">
                    <option value="₪">₪</option>
                    <option value="€">€</option>
                    <option value="$">$</option>
                </select>
                <label htmlFor="isOnSale">Is the book on sale:</label>
                <input value={isOnSale || ''} onChange={handleChange} type="checkbox" name="isOnSale" id="isOnSale" />
                <label htmlFor="author">Author:</label>
                <input value={author || ''} onChange={handleChange} type="text" name="author" id="author" />
                <label htmlFor="genre">Genre:</label>
                <input value={genres.join(', ') || ''} onChange={handleChange} type="text" name="genre" id="genre" placeholder="comma seperated for multiple" />
                <label htmlFor="pageCount">Book length:</label>
                <input value={pageCount || ''} onChange={handleChange} type="number" name="pageCount" id="pageCount" />
                <label htmlFor="publishedDate">Publication date::</label>
                <input value={publishedDate || ''} onChange={handleChange} type="number" name="publishedDate" id="publishedDate" />
                <button>Save</button>
                <Link to="/books"> <button type="button">Cancel</button></Link>            
            </form>
        </section>
    )
}