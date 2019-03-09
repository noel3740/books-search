import React from 'react';
import './style.css';
import Card from '../../components/Card'

class Saved extends React.Component {
    state = {
        books: []
    }

    render() {
        return (
            <div className="container savedPage">
                <div className="row">
                    <h4>Saved Books</h4>
                    {this.state.books.map(book =>
                        <Card
                            isSaved="true"
                            key={book.id}
                            bookId={book.id}
                            image={book.smallThumbnail}
                            previewLink={book.infoLink}
                            title={book.title}
                            author={book.authors.join(',')}
                            description={book.description} />
                    )}
                </div>
            </div>
        )
    }
}

export default Saved;