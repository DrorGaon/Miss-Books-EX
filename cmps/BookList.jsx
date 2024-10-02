import { BookPreview } from "./BookPreview.jsx"

const { Link } = ReactRouterDOM

export function BookList({books, onRemoveBook}){


    return (
        <React.Fragment>
            <ul className="book-list">
                {books.map(book => 
                    <li key={book.id}>
                        <BookPreview book={book} />
                            <Link to={`/books/${book.id}`}> <button>Show more</button></Link>
                            <Link to={`/books/edit/${book.id}`}> <button>Edit book</button></Link>
                            <button className="remove-btn" onClick={() => onRemoveBook(book.id)}>X</button>
                    </li>
                )}
            </ul>
            <Link to="/books/edit"> <button className="add-book-btn">Add book</button> </Link>
        </React.Fragment>
    )
}