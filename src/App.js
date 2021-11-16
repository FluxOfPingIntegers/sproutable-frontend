import './App.css'
import LocationIndex from './containers/LocationIndex'
import LocationShow from './components/LocationShow'
import Nav from './components/Nav'
import Auth from './components/Auth'
import { Routes as Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'

function App({user, autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])

  return (
    <div className="App">
      <Nav />
      <Auth />
      <LocationIndex />
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);

//  <Nav />
//  { user.username ?
//    <Switch>
//      <Route path="/locations/zip-search/"><LocationIndex/></Route>
//      <Route path="/locations/:id"><LocationShow/></Route>
//    </Switch> : 
//    <Auth />
//  }