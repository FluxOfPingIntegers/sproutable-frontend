import './App.css'
import LocationIndex from './containers/LocationIndex'
import LocationShow from './components/LocationShow'
import ZipSearch from './components/ZipSearch'
import Nav from './components/Nav'
import Auth from './components/Auth'
import UserContainer from './containers/UserContainer'
import { Routes as Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'

function App({autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/locations/zip-search/:zipcode" element={<LocationIndex />} />
        <Route path="/locations/:zipcode" element={<LocationShow />} />
        <Route exact path="/users/login" element={<Auth />} />
        <Route exact path="/users/signup" element={<Auth />} />
        <Route path="/users/:user_id" element={<UserContainer />} />
        <Route exact path="/locations/zip-search" element={<ZipSearch />} />
      </Switch>
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