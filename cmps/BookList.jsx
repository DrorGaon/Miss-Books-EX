import { BookPreview } from "./BookPreview.jsx"


export function BookList({books, setBookToDisplay}){


    return (
        <ul className="book-list">
            {books.map(book => 
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => setBookToDisplay(book.id)}>Show more</button>
                    </section>
                </li>
            )}
        </ul>
    )
}