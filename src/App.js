import React, { useEffect } from "react"
import Router from "./Router";
import {connect} from "react-redux"
import {loadUser} from "./actions/auth"
import { transitions,positions,Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App(props) {

  useEffect(() => {
    props.loadUser()
  },[])

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router />
    </AlertProvider>
  )
  
  
}

export default connect(null,{loadUser})(App);
