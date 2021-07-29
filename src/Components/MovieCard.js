import React from 'react'
import { Card } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'

const MovieCard = ({movie}) => {
    return (
        <Card style={{ width: '18rem', margin:"30px auto" }} >
            <Card.Img style={{height:' 50%'}} variant="top" src={movie.posterUrl} />
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <Card.Title> {movie.title} </Card.Title>
                <Card.Text>
                {movie.description}
                </Card.Text>
                <StarRatingComponent value={movie.rate} />
            </Card.Body>
        </Card>
    )
}

export default MovieCard