import { bookservice } from "../services/book.service.js"

const { useState } = React

export function BookEdit(bookId){

    const [book, setBook] = useState(bookservice.getEmptybook())

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
        bookservice.query()
            .then(books => console.log(books[-1]))
    }

    const {title, listPrice, genres, author, pageCount, publishedDate} = book
    const {price, symbol, isOnSale} = listPrice
    
    return (
        <section className="book-edit">
            <h1>Add car</h1>
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
                <input value={genres || ''} onChange={handleChange} type="text" name="genre" id="genre" placeholder="comma seperated for multiple" />
                <label htmlFor="pageCount">Book length:</label>
                <input value={pageCount || ''} onChange={handleChange} type="number" name="pageCount" id="pageCount" />
                <label htmlFor="publishedDate">Publication date::</label>
                <input value={publishedDate || ''} onChange={handleChange} type="number" name="publishedDate" id="publishedDate" />
                <button>Save</button>
            </form>
        </section>
    )
}