import React, { Component } from "react";
import API from "../utils/API";
import { Container, Col, Row } from "../components/Grid";
// import SavedView from "../compontents/SavedView";
// import CardLayout from "..compontents/CardLayout"

class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: "Search for a book",
    };
 
    componentDidMount() {
        this.getBooks()
        
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
            // this.setState({ search: event.target.value })
        });
    };


    getBooks = () => {
        API.getBooks(this.state.search)
            .then(res => {
                console.log("GetSearchBooks",res);
                this.setState({
                    books: res.data
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    books: [],
                    message: "No books found, try again"
                })

            })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };
    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            key: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imagelinks.thumbnail,
            link: book.volumeInfo.infoLink
        }).then(() => this.getBooks());
    };
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="mid-12">
                        {/* <Cardlayout title="Book Search" icon="far fa-book"></CardLayout> */}

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SearchBooks;             
