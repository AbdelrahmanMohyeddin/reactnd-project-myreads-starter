import React,{ Component } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";

export default class SearchBooks extends Component{
    hundelSearch = (query) =>{
        query.length > 0 &&
        this.props.searchBooks(query)
    }
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link exact to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                    <input type="text" onChange={(event) =>{this.hundelSearch(event.target.value)}} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                        this.props.books.length > 0?
                        this.props.books.map((book,index) => {
                            return (
                            <BookItem key={index} updateSehlf={this.updateBookInShelf} book={book}/>
                            )
                        })
                        :
                        <p>Not Found Books By This Name</p>
                    }
                    </ol>
                </div>
          </div>
        )
    }
}