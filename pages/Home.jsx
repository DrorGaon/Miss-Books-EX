import { About } from "./About.jsx";
import { BookIndex } from "./BookIndex.jsx";

export function Home({onSetPage}) {

    return (
        <section>
            <h2>Welcome to Miss Books</h2>
            <p>Your go to place for anything books!</p>
            <p>New - now also on the samsung smart fridge, <br />
            samsung smart toaster and more!</p>
            <button onClick={() => onSetPage('books')}>Our catalog</button>
        </section>
    )
}
