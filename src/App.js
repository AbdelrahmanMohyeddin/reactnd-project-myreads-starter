import React, { Suspense } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

const SearchBooks = React.lazy(() => import('./SearchBooks'))
const ListOfBooks = React.lazy(() => import('./ListOfBooks'))

class BooksApp extends React.Component {
  constructor(props){
    super(props)
    this.getAll()
  }

  state = {
    books:[],
    searchBooks:[]
  }

  getAll = () =>{
    console.log("updated")
    BooksAPI.getAll()
    .then(allBooks => {
      this.setState({
        books:allBooks
      })
    })
  }

  componentDidMount(){

    this.getAll()

    BooksAPI.getAll()
    .then(allBooks => {
      this.setState({
        searchBooks:allBooks
      })
    })

    this.searchBooks = (query) =>{
      query.length > 0 &&
      BooksAPI.search(query)
      .then(allBooks => {
        this.setState({
          books:allBooks
        })
      })
    }
   
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/search"  exact render={()=>{
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <SearchBooks getAll={this.getAll} books={this.state.books} addABook={this.addABook} searchBooks={this.searchBooks}/>
                </Suspense>
              )}} />

            <Route path="/" exact render={()=>{
              return (
              <Suspense fallback={<div>Loading...</div>}>
                <ListOfBooks getAll={this.getAll}  books={this.state.books} addABook={this.addABook} />
              </Suspense>
              )}}/>
          </Switch>
          
        </Router>
      </div>
    )
  }
}

export default BooksApp
