import { bookservice } from "../services/book.service.js"

const {useState, useEffect} = React

export function BookFilter({filterBy, onSetFilterBy}){
    //wanna change to filter by max price,
    //need to implement debounce for that

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

    const {title, minPrice} = filterByToEdit

    return (
        <section className="book-filter">
            <h1>Search here:</h1>
            <form className="filter-params">
                <label htmlFor="title">By title:</label>
                <input value={title} onChange={handleChange} type="text" name="title" id="title" placeholder="Search by book title"/>
                <label htmlFor="minPrice">By minimum price:</label>
                <input value={minPrice || ''} onChange={handleChange} type="number" name="minPrice" id="minPrice" placeholder="Search by minimun price"/>
            </form>
        </section>
    )
}