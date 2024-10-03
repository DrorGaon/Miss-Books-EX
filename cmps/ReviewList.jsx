import { ReviewPreview } from "./ReviewPreview.jsx";


export function ReviewList({ reviews }){

    if(!reviews) return null
    return (
        <section className="review-list">
            <h2>Book reviews:</h2>
            <ul>
                {reviews.map( (review, idx) => 
                    <ReviewPreview key={idx} review={review}/>
                )}
            </ul>
        </section>
    )
}