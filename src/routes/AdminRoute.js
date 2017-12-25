import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { createSelector, createStructuredSelector } from 'reselect'
import { reuseToken } from 'actions/auth/login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TBMLoader } from 'components'
import { isAdmin } from 'utils/jwt'

class PrivateRoute extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    auth: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    reuseToken: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.reuseToken()
  }

  render() {
    const { path, component, auth } = this.props
    if (auth.error.length > 0) return <Redirect to="/login" />
    if (!isAdmin(localStorage.getItem('token'))) return <Redirect to="/404" />
    return auth.status === 'authenticated' ? <Route path={path} component={component} /> : <TBMLoader />
  }
}

const mapStateToProps = createStructuredSelector({
  auth: createSelector(state => state.auth, status => status),
})

const mapDispatchToProps = dispatch => bindActionCreators({ reuseToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
