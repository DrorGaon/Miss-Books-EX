import { BookPreview } from "./BookPreview.jsx"


export function BookList({books, setBookToDisplay, onRemoveBook}){


    return (
        <ul className="book-list">
            {books.map(book => 
                <li key={book.id}>
                    <BookPreview book={book} />
                        <button onClick={() => setBookToDisplay(book.id)}>Show more</button>
                        <button className="remove-btn" onClick={() => onRemoveBook(book.id)}>X</button>
                </li>
            )}
        </ul>
    )
}