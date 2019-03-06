import React from 'react';
import './style.css';

const Card = props => {

    return (
        <div className="reactCard col s12 m6 l3" >
            <div className="card hoverable waves-effect waves-dark" onClick= { () => props.onClickMethod(props.imageUrl) }>
                <div className="card-image">
                    <img className="reactCardImage" src={props.imageUrl} alt={props.imageText} />
                </div>
            </div>
        </div>
    );
}

export default Card;
