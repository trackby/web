import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

export default class RegisterComponent extends React.Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
    error: PropTypes.string,
    status: PropTypes.string,
  }

  static defaultProps = {
    error: '',
    status: '',
  }

  state = { email: '', username: '', password: '', age: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const { username, email, password, age } = this.state
    this.props.register({ username, email, password, age })
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
    const { username, email, password, age } = this.state

    const ErrorComponent = error ? <StyledMessage>{error}</StyledMessage> : null

    return (
      <StyledGrid textAlign="center">
        <Grid.Column verticalAlign="middle" style={{ maxWidth: 450 }}>
          <Header as="h2" color="green" textAlign="center">
            Register
          </Header>
          {ErrorComponent}
          <Form size="large" onSubmit={this.handleSubmit}>
            <StyledSegment stacked>
              <Form.Input
                key="register.email"
                required
                fluid
                type="email"
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
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
                key="register.age"
                required
                fluid
                icon="calendar"
                iconPosition="left"
                placeholder="Age"
                name="age"
                value={age}
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
                {status === 'progress' ? <Icon name="asterisk" loading /> : 'Register'}
              </Button>
            </StyledSegment>
          </Form>
          <StyledMessage>
            Already have an account? <Link to="login">Login</Link>
          </StyledMessage>
        </Grid.Column>
      </StyledGrid>
    )
  }
}
