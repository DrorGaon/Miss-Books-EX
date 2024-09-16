import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'

export function App() {
    return (
        <section className="app">
            <AppHeader />
            <main className="container">
                <Home />
            </main>
        </section>
    )
}