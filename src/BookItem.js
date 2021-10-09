import React,{ Component } from "react";
import * as BooksAPI from './BooksAPI'

export default class BookItem extends Component{

    componentDidMount(){
        this.updateSehlf = (book,shelf) =>{
            // console.log(shelf)
            BooksAPI.update(book,shelf)
            .then(this.props.getAll)
            .catch(err => console.log(err))
        }
    }
    render(){
        return(
            <li key={this.props.book.id}>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                    <select onChange={(event) => {this.updateSehlf(this.props.book,event.target.value)}}>
                        <option value="move" >Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
        )
    }
}