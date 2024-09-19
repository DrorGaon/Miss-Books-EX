export function BookPreview({book}){

    const {listPrice, title, cover} = book

    return (
        <article className="book-preview">
            <h2>{title}</h2>
            <h2>{listPrice.price}{listPrice.symbol}</h2>
            <img src={cover} alt="book-cover" />
        </article>
    ) 
}