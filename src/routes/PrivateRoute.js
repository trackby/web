import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { createSelector, createStructuredSelector } from 'reselect'
import { reuseToken } from 'actions/auth/login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isJwtExpired } from 'utils/jwt'

class PrivateRoute extends React.Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    reuseToken: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.reuseToken()
  }

  render() {
    const { status, path, component } = this.props
    console.log(status)
    const token = localStorage.getItem('token')
    return token && !isJwtExpired(token) ? <Route path={path} component={component} /> : <Redirect to="/login" />
  }
}

const mapStateToProps = createStructuredSelector({
  status: createSelector(state => state.auth.status, status => status),
})

const mapDispatchToProps = dispatch => bindActionCreators({ reuseToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
