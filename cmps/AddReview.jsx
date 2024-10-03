import { bookservice } from "../services/book.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"

const { useState } = React
const { useParams } = ReactRouterDOM

export function AddReview(){

    const [review, setReview] = useState({})
    const { bookId } = useParams()

    function onSaveReview(ev){
        ev.preventDefault()
        if(!review.fullName || !review.rating || !review.readAt){
            showErrorMsg('Review details missing')
            return
        }
        bookservice.addReview(bookId, review)
    }

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
        setReview(prevReview => ({...prevReview, [field]: value}))
    }

    const { fullName, rating, readAt } = review

    return (
        <section className="add-review">
            <form onSubmit={onSaveReview} autoComplete="off">
                <h2>Add a review for this book</h2>
                <label htmlFor="fullName">Name:</label>
                <input onChange={handleChange} value={ fullName || '' } type="text" name="fullName" id="fullName" />
                <label htmlFor="rating">Rating:</label>
                <input onChange={handleChange} value={ rating || '' } type="number" name="rating" id="rating" />
                <label htmlFor="readAt">When did you read this book?</label>
                <input onChange={handleChange} value={ readAt || '' } type="date" name="readAt" id="readAt" />
                <button>Save</button>
            </form>
        </section>
    )
}