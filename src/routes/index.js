import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import pure from 'recompose/pure'
import { NotFound } from 'components'
import AuthRoute from './AuthRoute'
import PrivateRoute from './PrivateRoute'
import LogoutRoute from './LogoutRoute'

import ComingSoonContainer from '../containers/ComingSoonContainer'
import { LoginContainer, RegisterContainer, ShowContainer, FriendsContainer } from '../containers'

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
        <PrivateRoute path="/show/:id" component={ShowContainer} />
        <PrivateRoute path="/friends" component={FriendsContainer} />
        <Route path="/404" component={NotFound} />
        <PrivateRoute path="/" component={ComingSoonContainer} />
      </Switch>
    </Container>
  </Router>
)

export default pure(Routes)
