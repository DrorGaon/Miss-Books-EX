import { utilService } from "../services/util.service.js"

export function BookPreview({book}){

    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            <h2>Price: {book.listPrice}</h2>
            <img src={book.cover} alt="book-cover" />
        </article>
    ) 
}