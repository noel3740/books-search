import axios from 'axios';
const apiKey = 'AIzaSyBgfix6XdwCki6vhn01SpaKF_rf1UAlLHA';
const hostUrl = 'https://www.googleapis.com/books/v1'

export default {
    searchForBookTitle: (searchTerm) => {
        return axios.get(`${hostUrl}/volumes?q=${encodeURIComponent(searchTerm)}&${apiKey}`);
    }
}