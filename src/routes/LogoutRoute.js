import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { logout } from 'actions/auth/logout'
import { connect } from 'react-redux'

class LogoutRoute extends React.Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.logout()
  }

  render() {
    return <Redirect to="login" />
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default connect(null, mapDispatchToProps)(LogoutRoute)
