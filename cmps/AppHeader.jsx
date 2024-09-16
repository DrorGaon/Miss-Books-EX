export function AppHeader({onSetPage}){
    return(
        <section className="app-header">
            <h1>Miss Books</h1>
            <nav className="app-nav">
                    <a onClick={() => onSetPage('home')} href="#">Home</a>
                    <a onClick={() => onSetPage('about')} href="#">About</a>
                    <a onClick={() => onSetPage('books')} href="#">Our catalog</a>
                </nav>
        </section>
    )
}