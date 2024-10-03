

export function ReviewPreview({ review }){

    return (
        <li className="review">
            {`Name: ${review.fullName}, Rating: ${review.rating}, Book was read at: ${review.readAt}`}
        </li>
    )
}