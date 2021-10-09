import React,{ Component, Suspense } from "react";
import { Link } from "react-router-dom";
const BookShelf = React.lazy(() => import('./BookShelf'))

export default class ListOfBooks extends Component{
    
    constructor(props){
        super(props)
        this.props.getAll();
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
                        <BookShelf getAll={this.props.getAll} books={this.props.books} shelfName={"Currently Reading"} shelfType={"currentlyReading"}/>
                        <BookShelf getAll={this.props.getAll} books={this.props.books} shelfName={"Want To Read"} shelfType={"wantToRead"}/>
                        <BookShelf getAll={this.props.getAll} books={this.props.books} shelfName={"Read"} shelfType={"read"}/>
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