import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import pure from 'recompose/pure'
import AuthRoute from './AuthRoute'
import PrivateRoute from './PrivateRoute'
import LogoutRoute from './LogoutRoute'
import ComingSoonContainer from '../containers/ComingSoonContainer'
import { RegisterContainer, LoginContainer } from '../containers'

const Container = styled.div`
  text-align: center;
`
const Routes = () => (
  <Router>
    <Container>
      <Switch>
        <AuthRoute path="/register" component={RegisterContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <LogoutRoute path="/logout" />
        <PrivateRoute path="/" component={ComingSoonContainer} />
      </Switch>
    </Container>
  </Router>
)

export default pure(Routes)
