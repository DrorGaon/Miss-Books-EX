const { Link } = ReactRouterDOM

export function Home() {

    return (
        <section>
            <h2>Welcome to Miss Books</h2>
            <p>Your go to place for anything books!</p>
            <p>New - now also on the samsung smart fridge, <br />
            samsung smart toaster and more!</p>
            <Link to="/books"> <button>Our catalog</button></Link>
        </section>
    )
}
