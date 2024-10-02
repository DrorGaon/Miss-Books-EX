const {NavLink} = ReactRouterDOM

export function AppHeader(){
    return(
        <section className="app-header">
            <h1>Miss Books</h1>
            <nav className="app-nav">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/books">Our catalog</NavLink>
            </nav>
        </section>
    )
}