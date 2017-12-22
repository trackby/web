import React from 'react'
import PropTypes from 'prop-types'
import { LoginComponent } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from 'actions/auth/login'

class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }

  login = params => {
    this.props.login(params)
  }

  render() {
    const { error, status } = this.props
    return <LoginComponent login={this.login} error={error} status={status} />
  }
}

const mapStateToProps = createStructuredSelector({
  error: createSelector(state => state.auth.error, error => error),
  status: createSelector(state => state.auth.status, status => status),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
