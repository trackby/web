import React from 'react'
import PropTypes from 'prop-types'
import { createSelector, createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as FriendshipActions from 'actions/friendship'
import { UserComponent, TBMLoader } from 'components'

class UserContainer extends React.Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired,
    removeFriend: PropTypes.func.isRequired,
    getFriendshipStatus: PropTypes.func.isRequired,
    initOtherUser: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    otherUser: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    match: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    const { user, match, getFriendshipStatus, initOtherUser } = props
    if (user.username !== match.params.username) {
      getFriendshipStatus(match.params.id)
      initOtherUser(match.params.id, match.params.username)
    }
  }

  render() {
    const { user, otherUser, addFriend, removeFriend, match } = this.props

    return user.username === match.params.username ? (
      <Redirect to="/404/" />
    ) : otherUser.fetched ? (
      <UserComponent otherUser={otherUser} addFriend={addFriend} removeFriend={removeFriend} />
    ) : (
      <TBMLoader />
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
