import React from 'react'
import PropTypes from 'prop-types'
import { createSelector, createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as FriendshipActions from 'actions/friendship'
import { UserComponent } from 'components'

class UserContainer extends React.Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired,
    removeFriend: PropTypes.func.isRequired,
    getFriendshipStatus: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    otherUser: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    match: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    const { user, otherUser, getFriendshipStatus } = props
    if (user.id != otherUser.id) {
      getFriendshipStatus(otherUser.id)
    }
  }

  render() {
    const { user, otherUser, addFriend, removeFriend } = this.props

    return user.id == otherUser.id ? (
      <Redirect to="/404/" />
    ) : (
      <UserComponent otherUser={otherUser} addFriend={addFriend} removeFriend={removeFriend} />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user: createSelector(state => state.user, user => user),
  otherUser: createSelector(state => state.otherUser, otherUser => otherUser),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FriendshipActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
