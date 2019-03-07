import React from 'react';
import './style.css';
import Card from '../../components/Card'

class Search extends React.Component {
    render() {
        return (
            <div className="container searchPage">
                <div className="row searchFormContainer">
                    <h4>Book Title Search</h4>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="bookTitle" id="bookTitle" type="text" className="validate" />
                                <label htmlFor="bookTitle">Book Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Search
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="row searchResultsContainer">
                    <h4>Search Results</h4>

                    <div className="searchResult col s12">
                        <Card 
                            key="hXNvadj27ekC"
                            bookId="hXNvadj27ekC"
                            image="http://books.google.com/books/content?id=hXNvadj27ekC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            previewLink="http://books.google.com/books?id=hXNvadj27ekC&printsec=frontcover&dq=game+of+thrones&hl=&cd=1&source=gbs_api"
                            title="A Game of Thrones"
                            author="George R. R. Martin"
                            description="The kingdom of the royal Stark family faces its ultimate challenge in the onset of a generation-long winter, the poisonous plots of the rival Lannisters, the emergence of the Neverborn demons, and the arrival of barbarian hordes"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Search;