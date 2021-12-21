import './App.css'
import LocationIndex from './containers/LocationIndex'
import LocationShow from './components/LocationShow'
import Nav from './components/Nav'
import Auth from './components/Auth'
import UserEdit from './components/UserEdit'
import UserContainer from './containers/UserContainer'
import { Routes as Switch, Route } from "react-router-dom"
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'
import Home from './components/Home'
import EventShow from './components/EventShow'
import ProductShow from './components/ProductShow'
import ProductNew from './components/ProductNew'
import VendorForm from './containers/VendorForm'
import VendorContainer from './containers/VendorContainer'

function App() {
  const dispatch = useDispatch()
  useEffect(() => localStorage.token && dispatch(autoLogin()), [autoLogin])
  return (
    <div className="App">
      <Nav />
      <div className="pages">
      <Switch>
        <Route path="/locations/zip-search/:zipcode" element={<LocationIndex />} />
        <Route path="/locations/:id/events" element={<LocationShow />} />
        <Route path="/locations/:location_id/events/:id" element={<EventShow />} />
        <Route exact path="/users/login" element={<Auth />} />
        <Route exact path="/users/signup" element={<Auth />} />
        <Route exact path="/users/1/edit" element={<UserEdit />} />
        <Route path="/users/:user_id" element={<UserContainer />} />
        <Route exact path="/vendors/new" element={<VendorForm />} />
        <Route exact path="/vendors/:vendor_id/products/:id" element={<ProductShow />} />
        <Route exact path="/vendors/:vendor_id/products/new" element={<ProductNew />} />
        <Route exact path="/vendors/:vendor_id/edit" element={<VendorForm />} />
        <Route exact path="/vendors/:vendor_id" element={<VendorContainer />} />
        <Route exact path="/" element={<Home />} />
      </Switch>
      </div>
    </div>
  );
}

export default App;