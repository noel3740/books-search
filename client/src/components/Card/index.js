import React from 'react';
import './style.css';

const Card = props => {

    return (
        <div className="reactCard">
            <div className="col s12">
                <div className="row">
                    <div className="card horizontal horizontalCard">
                        <div className="card-image">
                            <img alt={props.title} src={props.image} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <span className="card-title">{props.title}</span>
                                <p><small>by {props.author}</small></p>
                                <br />
                                <p>{props.description}</p>
                            </div>
                            <div className="card-action">
                                <a data-book-id={props.bookId} href={props.previewLink} target="_blank" rel="noopener noreferrer" className="marginRight waves-effect waves-light btn viewButton"><i className="material-icons left">visibility</i>view</a>
                                { props.isSaved ? '' : <a data-book-id={props.bookId} href="#!" className="waves-effect waves-light btn"><i className="material-icons left">save</i>save</a> }
                                { props.isSaved ? <a data-book-id={props.bookId} href="#!" className="waves-effect waves-light btn"><i className="material-icons left">delete</i>delete</a> : '' }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
