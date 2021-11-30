import './App.css'
import LocationIndex from './containers/LocationIndex'
import LocationShow from './components/LocationShow'
import ZipSearch from './components/ZipSearch'
import Nav from './components/Nav'
import Auth from './components/Auth'
import UserEdit from './components/UserEdit'
import UserContainer from './containers/UserContainer'
import { Routes as Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'
import Home from './components/Home'
import EventShow from './components/EventShow'
import VendorNew from './components/VendorForm'

function App({autoLogin, user}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/locations/zip-search/:zipcode" element={<LocationIndex />} />
        <Route path="/locations/:id/events" element={<LocationShow />} />
        <Route path="/locations/:location_id/events/:id" element={<EventShow />} />
        <Route exact path="/users/login" element={<Auth />} />
        <Route exact path="/users/signup" element={<Auth />} />
        <Route exact path="/users/1/edit" element={<UserEdit />} />
        <Route path="/users/:user_id" element={<UserContainer />} />
        <Route exact path="/locations/zip-search" element={<ZipSearch />} />
        <Route exact path="/vendors/new" element={<VendorForm vendor={user.vendor} />} />
        <Route exact path="/vendors/1/edit" element={<VendorForm vendor={user.vendor} />} />
        <Route exact path="/" element={<Home />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.selectedUser})

export default connect(mapStateToProps, {autoLogin})(App);