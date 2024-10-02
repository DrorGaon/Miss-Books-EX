const { useNavigate } = ReactRouterDOM

export function NotFound(){

    const navigate = useNavigate()

    return (
        <section className="not-found">
            <h2>404 page not found</h2>
            <button onClick={() => navigate(-1)}>Go back</button>
        </section>
    )
}