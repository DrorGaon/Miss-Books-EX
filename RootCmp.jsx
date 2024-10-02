const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/About.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'

export function App() {

    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main className="container">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/books" element={<BookIndex />} />
                        <Route path="/books/:bookId" element={<BookDetails />} />
                        <Route path="/books/edit" element={<BookEdit />} />
                        <Route path="/books/edit/:bookId" element={<BookEdit />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}