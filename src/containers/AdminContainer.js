import React from 'react'
import PropTypes from 'prop-types'
import { createSelector, createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AdminActions from 'actions/admin'
import { AdminComponent } from 'components'

class AdminContainer extends React.Component {
  static propTypes = {
    addShow: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
  }

  render() {
    const { addShow } = this.props
    return <AdminComponent addShow={addShow} />
  }
}

const mapStateToProps = createStructuredSelector({
  user: createSelector(state => state.user, user => user),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AdminActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
