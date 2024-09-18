export function BookPreview({book}){

    const {listPrice} = book

    return (
        <article className="book-preview">
            <h2>{book.title}</h2>
            <h2>{listPrice.amount}{listPrice.symbol}</h2>
            <img src={book.cover} alt="book-cover" />
        </article>
    ) 
}