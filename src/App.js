import './App.css'
import LocationIndex from './containers/LocationIndex'
import LocationShow from './components/LocationShow'
import Nav from './components/Nav'
import Auth from './components/Auth'
import { Routes as Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'

function App({user, autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])

  return (
    <div className="App">
      <Nav />
      { user.username ?
        <Switch>
          <Route path="/locations/zip-search/:zipcode"><LocationIndex/></Route>
          <Route path="/locations/:id"><LocationShow/></Route>
          <Route exact path="/"><LocationIndex/></Route>
        </Switch> : 
        <Auth/>
      }
    </div>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);
