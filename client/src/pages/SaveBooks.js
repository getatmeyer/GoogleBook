import React, { Component } from "react";
import API from "../utils/API";
// import SavedView from "../compontents/SavedView";

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {

        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data })
                console.log("GetBooks", res.data);
            })

            .catch(err => console.log(err))
    }



    // getSavedBooks = () => {
    //     API.getSavedBooks()
    //     .then(res =>
    //         this.setState({
    //             books: res.data
    //             })
    //     )
    //     .catch(err => console.log(err));

    // };


    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))


    };

    render() {
        return (

            <div>

                {/* <SavedView savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} /> */}
            </div>
        )
    }
}
export default SaveBook;

