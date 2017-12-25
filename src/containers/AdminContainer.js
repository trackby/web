import React from 'react'
import PropTypes from 'prop-types'
import { createSelector, createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FriendshipActions from 'actions/friendship'
import { FriendsComponent } from 'components'

class AdminContainer extends React.Component {
  static propTypes = {
    getFriends: PropTypes.func.isRequired,
    getRequests: PropTypes.func.isRequired,
    addFriend: PropTypes.func.isRequired,
    removeFriend: PropTypes.func.isRequired,
    approveRequest: PropTypes.func.isRequired,
    denyRequest: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    const { user, getFriends, getRequests } = props
    getFriends(user.username)
    getRequests()
  }

  render() {
    const { user, addFriend, removeFriend, approveRequest, denyRequest } = this.props

    return (
      <FriendsComponent
        user={user}
        addFriend={addFriend}
        removeFriend={removeFriend}
        approveRequest={approveRequest}
        denyRequest={denyRequest}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user: createSelector(state => state.user, user => user),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FriendshipActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
