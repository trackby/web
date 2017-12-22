import React from 'react'
import PropTypes from 'prop-types'
import { RegisterComponent } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as RegisterActions from 'actions/auth/register'

class Register extends React.Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }

  register = params => {
    this.props.register(params)
  }

  render() {
    const { error, status } = this.props
    return <RegisterComponent register={this.register} error={error} status={status} />
  }
}

const mapStateToProps = createStructuredSelector({
  error: createSelector(state => state.auth.error, error => error),
  status: createSelector(state => state.auth.status, status => status),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RegisterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
