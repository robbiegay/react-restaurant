import React from 'react';

// Card for each menu item
class Card extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{this.props.mealTitle}</h5>
                        <h6 className='card-subtitle mb-2 text-muted'>{this.props.mealPrice}</h6>
                        <p className='card-text'>{this.props.mealDescription}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Card;
