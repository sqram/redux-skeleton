/*
 * This is the app container component.
 * It is a redux smart component.
 */

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Jumbotron from '../components/jumbotron'


 // selector
 // returns the props you need for the component
 // so it can be injected by connect()
function select(state) {
  return {
    items: state.items
  }
}


export default class App extends React.Component {

  render() {

    // these props are injected via connect()
    //const { dispatch, pages } = this.props

    return <div><Jumbotron /></div>
  }
}









// use connect() to insert our state into our App
// so they can be used as props
// it also injects the dispatch function
export default connect(select)(App)