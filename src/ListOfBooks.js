import React,{ Component, Suspense } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
const BookShelf = React.lazy(() => import('./BookShelf'))

export default class ListOfBooks extends Component{
    
    state = {
        books:[]
    }

    componentDidMount(){

        this.getAll = () =>{
            BooksAPI.getAll()
            .then(allBooks => {
            this.setState({
                books:allBooks
            })
            })
        }

        BooksAPI.getAll()
        .then(allBooks => {
          this.setState({
            books:allBooks
          })
        })
       
    }

    render(){
        return(
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <BookShelf getAll={this.getAll} books={this.state.books} shelfName={"Currently Reading"} shelfType={"currentlyReading"}/>
                        <BookShelf getAll={this.getAll} books={this.state.books} shelfName={"Want To Read"} shelfType={"wantToRead"}/>
                        <BookShelf getAll={this.getAll} books={this.state.books} shelfName={"Read"} shelfType={"read"}/>
                    </Suspense>
                </div>
                </div>
                <div className="open-search">
                    <Link  to="/search"><button>Add a book</button></Link>               
                </div>
            </div>
        )
    }
}