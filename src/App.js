import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

const SearchBooks = React.lazy(() => import('./SearchBooks'))
const ListOfBooks = React.lazy(() => import('./ListOfBooks'))

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/search"  exact render={()=>{
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <SearchBooks/>
                </Suspense>
              )}} />

            <Route path="/" exact render={()=>{
              return (
              <Suspense fallback={<div>Loading...</div>}>
                <ListOfBooks/>
              </Suspense>
              )}}/>
          </Switch>
          
        </Router>
      </div>
    )
  }
}

export default BooksApp
