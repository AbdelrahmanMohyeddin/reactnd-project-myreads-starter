import React,{ Component } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import * as BooksAPI from './BooksAPI'

export default class SearchBooks extends Component{

    state = {
        searchBooks:[],
        books:[]
    }

    componentDidMount(){

        this.searchBooks = (query) =>{
            query.length > 0 ?
            BooksAPI.search(query)
            .then(allBooks => {
              this.setState({
                searchBooks:allBooks
              })
            })
            :
            this.setState({
              searchBooks:[]
            })
        }
        BooksAPI.getAll().then(b => this.setState({books:b}))
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                    <input type="text" onChange={(event) =>{this.searchBooks(event.target.value)}} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                        this.state.searchBooks.length > 0?
                        this.state.searchBooks.map(book => {
                            let targetBook = this.state.books.filter(b => b.id === book.id)
                            return (
                                <BookItem bookShelf={targetBook.length > 0 ? targetBook[0].shelf : "none"} key={book.id} updateShelf={this.updateBookInShelf} book={book}/>
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