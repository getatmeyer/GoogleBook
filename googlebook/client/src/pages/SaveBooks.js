import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
// import SavedView from "../compontents/SavedView";
// import SavedResults from "../compontents/SavedResults";

class SaveBook extends Component {
    state = {
        books: []
    };
    
    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {
        API.getSavedBooks()
    }

    getSavedBooks = () => {
        API.getSavedBooks()
        .then(res =>
            this.setState({
                books: res.data
                })
        )
        .catch(err => console.log(err));
    
    };
        

    handleDeleteButton = id => {
        API.deleteBook(id)
        .then(res => this.getSavedBooks());
           
    };

    render() {
        return (
                // <Container fluid className="container">
                    // <Jumbotron />
                    // <Container>
                    <div>
                        <Row>
                            <div className="card"
                            {this.state.books.map(book => (
                              <CardSaved
                        <SavedResults savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                        </div>
            )
        }
    }
    export default SaveBook;

