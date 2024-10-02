const {useState, useEffect} = React

export function BookFilter({filterBy, onSetFilterBy}){

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({target}){
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
        }

        setFilterByToEdit(prevFilter => ({...prevFilter, [field]: value}))
    }

    const {title, minPrice, author, genre} = filterByToEdit

    return (
        <section className="book-filter">
            <h1>Search here:</h1>
            <form className="filter-params">
                <label htmlFor="title">By title:</label>
                <input value={title} onChange={handleChange} type="text" name="title" id="title" placeholder="Search by book title"/>
                <label htmlFor="minPrice">By minimum price:</label>
                <input value={minPrice || ''} onChange={handleChange} type="number" name="minPrice" id="minPrice" placeholder="Search by minimun price"/>
                <label htmlFor="author">By author:</label>
                <input value={author || ''} onChange={handleChange} type="text" name="author" id="author" placeholder="Search by author name"/>
                <label htmlFor="genre">By genre:</label>
                <input value={genre || ''} onChange={handleChange} type="text" name="genre" id="genre" placeholder="Search by genre"/>
            </form>
        </section>
    )
}