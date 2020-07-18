import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/userActions'
import { fetchWithCredentials } from '../concerns/fetchable'
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import FeedContainer from './FeedContainer'

class Dashboard extends Component {
  handleLogout = () => {
    fetchWithCredentials('http://localhost:3001/api/v1/logout', 'DELETE')
    .then(json => {
      if (json.logged_out) {
        this.props.logoutUser()
      }
    })
  }

  render() {
    return (
      <div>
        <NavBar handleLogout={this.handleLogout} />
        <div className='mx-5 p-2 h-100 dashboard'>
          <Switch>
            <Route exact path="/" component={FeedContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}



export default connect(null, { logoutUser })(Dashboard)