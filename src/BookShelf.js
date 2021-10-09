import React,{ Component } from "react";
import BookItem from "./BookItem";


export default class Shelf extends Component{
    
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.filter(b => b.shelf === this.props.shelfType).length > 0 &&
                            this.props.books.filter(b => b.shelf === this.props.shelfType).map(book => { 
                                return (
                                    <BookItem getAll={this.props.getAll} key={book.id} bookShelf={book.shelf} book={book}/>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}