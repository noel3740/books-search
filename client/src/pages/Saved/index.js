import React from 'react';
import './style.css';
import Card from '../../components/Card';
import APIService from '../../services/APIService';

class Saved extends React.Component {
    state = {
        books: []
    };

    componentDidMount = () => {
        //Get all the books saved to the database and set the state
        this.refreshBooks();
    };

    refreshBooks = () => {
        //Get all the books saved to the database and set the state
        APIService.getBooks()
            .then(books => {
                this.setState({
                    books: books.data
                });
            })
            .catch(error => {
                console.log(error);
                window.M.toast({html: 'Error getting books from the API service!'});
            });
    };

    onDeleteHandler = (bookId) => {
        //Delete the books from the database
        APIService.deleteBook(bookId)
            .then(() => {
                window.M.toast({html: 'Book deleted!'});
                //Get all the books saved to the database and set the state
                this.refreshBooks();
            })
            .catch(error => {
                console.log(error);
                window.M.toast({html: 'Error deleting book from the API service!'});
            });
    }

    render() {
        return (
            <div className="container savedPage">
                <div className="row">
                    <h4>Saved Books</h4>
                    {this.state.books.map(book =>
                        <Card
                            isSaved="true"
                            key={book.bookId}
                            bookId={book.bookId}
                            image={book.smallThumbnail}
                            previewLink={book.infoLink}
                            title={book.title}
                            author={book.authors.join(',')}
                            description={book.description}
                            onDeleteHandler={this.onDeleteHandler} />
                    )}
                </div>
            </div>
        )
    }
}

export default Saved;