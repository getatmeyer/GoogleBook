import axios from "axios"

export default {
    
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Gets the book with the given id
    getSavedBooks: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Saves a book to the database
    getSaveBooks: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

}