import React from 'react'
import PropTypes from 'prop-types'


const Rating = ({ value, text, color }) => {
    const stars = []

    for (var i = 0; i < 5; i++) {
        if (value - i >= 1) {
            stars.push(<i style={{ color }} className="fas fa-star"></i>)
        } else if (value - i > 0 && value - i < 1) {
            stars.push(<i style={{ color }} className="fas fa-star-half-alt"></i>)
        } else {
            stars.push(<i style={{ color }} className="far fa-star"></i>)
        }
    }
    return (
        <div className="rating">
            {stars.map((star) => (
                <span>{star}</span>
            ))}
            <span>{text && text}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: "#f8e825",
}


Rating.propsTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string

}

export default Rating
