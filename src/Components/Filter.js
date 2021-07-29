import React from 'react'
import StarRatingComponent from "react-star-rating-component";

const Filter = (props) => {

    return (
        <div>
    <StarRatingComponent
            name="rate1" 
            onStarClick={props.handleRate}
            emptyStarColor="#e6d1aa"
            starColor="darkgoldenrod"
          />
        </div>
    )
}

export default Filter
