const { useState } = React

import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/About.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'

export function App() {

    const [page, setPage] = useState('books')

    function onSetPage(page){
        setPage(page)
    }

    return (
        <section className="app">
            <AppHeader onSetPage={onSetPage} />
            <main className="container">
                {page === 'home' && <Home onSetPage={onSetPage} />}
                {page === 'about' && <About />}
                {page === 'books' && <BookIndex />}
            </main>
        </section>
    )
}