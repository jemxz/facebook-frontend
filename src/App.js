import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import jwtDecode from 'jwt-decode'
import SocialMedias from './components/socialMedias';
import Logout from './components/logout';
import LoginForm from './components/loginForm'
import Jumbotron from './components/jumbotron';
import Features from './components/features';
import Home from './components/home';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './common/protectedRoute';
import GroupsCollection from './components/facebook_groupsCollection';



class App extends Component {
  state = {}
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt)
      this.setState({user})
    } catch (error) {   
    }
  }
 

  render() {
    return (
      <div>
        <ToastContainer />
        <Jumbotron user={this.state.user}/>
        <div className="content">
          <Switch>
            <ProtectedRoute
              path="/socialmedias"
              component={SocialMedias}
            />
            <ProtectedRoute
              path="/groupscollection"
              component={GroupsCollection}
            />
            <Route path="/login" component={LoginForm}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/features" component={Features}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
