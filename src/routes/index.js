import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import pure from 'recompose/pure'
import { NotFound } from 'components'
import AuthRoute from './AuthRoute'
import PrivateRoute from './PrivateRoute'
import LogoutRoute from './LogoutRoute'

import {
  ComingSoonContainer,
  FriendsContainer,
  LoginContainer,
  RegisterContainer,
  ShowContainer,
  UserContainer,
} from '../containers'

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
        <PrivateRoute path="/show/:name" component={ShowContainer} />
        <PrivateRoute path="/friends" component={FriendsContainer} />
        <PrivateRoute path="/user/:username-:id" component={UserContainer} />
        <Route path="/404" component={NotFound} />
        <PrivateRoute path="/" component={ComingSoonContainer} />
      </Switch>
    </Container>
  </Router>
)

export default pure(Routes)
