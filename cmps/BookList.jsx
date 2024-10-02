import { BookPreview } from "./BookPreview.jsx"
const { Link } = ReactRouterDOM

export function BookList({books, onRemoveBook}){


    return (
        <ul className="book-list">
            {books.map(book => 
                <li key={book.id}>
                    <BookPreview book={book} />
                        <Link to={`/books/${book.id}`}> <button>Show more</button></Link>
                        <button className="remove-btn" onClick={() => onRemoveBook(book.id)}>X</button>
                </li>
            )}
        </ul>
    )
}