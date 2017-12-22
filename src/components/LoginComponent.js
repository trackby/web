import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

export default class LoginComponent extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    error: PropTypes.string,
    status: PropTypes.string,
  }

  static defaultProps = {
    error: '',
    status: '',
  }

  state = { username: '', password: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const { username, password } = this.state
    this.props.login({ username, password })
  }

  StyledSegment = styled(Segment)`
    background-color: #2f2f2f !important;
    color: #ececec !important;
  `
  StyledMessage = styled(Message)`
    background-color: #2f2f2f !important;
    color: #ececec !important;
  `

  StyledGrid = styled(Grid)`
    height: 100vh;
    vertical-align: middle;
  `

  render() {
    const { StyledSegment, StyledMessage, StyledGrid } = this
    const { error, status } = this.props
    const { username, password } = this.state

    const ErrorComponent = error ? <StyledMessage>{error}</StyledMessage> : null

    return (
      <StyledGrid textAlign="center">
        <Grid.Column verticalAlign="middle" style={{ maxWidth: 450 }}>
          <Header as="h2" color="green" textAlign="center">
            Login
          </Header>
          {ErrorComponent}
          <Form size="large" onSubmit={this.handleSubmit}>
            <StyledSegment stacked>
              <Form.Input
                key="register.username"
                required
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <Form.Input
                key="register.password"
                required
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />

              <Button color="green" fluid size="large" disabled={status === 'progress'}>
                {status === 'progress' ? <Icon name="asterisk" loading /> : 'Login'}
              </Button>
            </StyledSegment>
          </Form>
          <StyledMessage>
            Don't have an account? <Link to="/register">Register</Link>
          </StyledMessage>
        </Grid.Column>
      </StyledGrid>
    )
  }
}
