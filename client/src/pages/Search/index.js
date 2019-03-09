import React from 'react';
import './style.css';
import Card from '../../components/Card';
import googleBookService from '../../services/googleBooksService';

class Search extends React.Component {

    state = {
        searchTerm: "",
        books: []
      };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    searchForBookTitle = event => {
        event.preventDefault();

        googleBookService.searchForBookTitle(this.state.searchTerm)
            .then(books => {
                console.log(books.data.items);
                this.setState({
                    books: books.data.items
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container searchPage">
                <div className="row searchFormContainer">
                    <h4>Book Title Search</h4>
                    <form className="col s12 z-depth-1 searchForm">
                        <div className="row">
                            <div className="input-field col s12">
                                <input onChange={this.handleInputChange} name="searchTerm" id="searchTerm" type="text" className="validate" />
                                <label htmlFor="searchTerm">Book Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button onClick={this.searchForBookTitle} className="btn waves-effect waves-light" type="submit" name="action">Search
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="row searchResultsContainer">
                    <h4>Search Results</h4>
                    {this.state.books.map(book =>
                        <Card
                        key={book.id}
                        bookId={book.id}
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                        previewLink={book.volumeInfo.infoLink}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors.join(',')}
                        description={book.volumeInfo.description} />
                    )}
                </div>

            </div>
        )
    }
}

export default Search;