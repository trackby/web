import React from 'react'
import PropTypes from 'prop-types'
import { AvatarHeader, TBMLoader } from 'components'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'

export default class UserComponent extends React.Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired,
    removeFriend: PropTypes.func.isRequired,
    getFriendshipStatus: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    otherUser: PropTypes.object.isRequired,
  }

  handleAdd = id => () => {
    const { addFriend } = this.props
    addFriend(id)
  }

  handleRemove = id => () => {
    const { removeFriend } = this.props
    removeFriend(id)
  }

  Approve = styled.a`
    color: green;
  `

  Deny = styled.a`
    color: red;
  `

  render() {
    const { id, username, fetched, isFriend } = this.props.otherUser
    const actionComponent = isFriend ? (
      <this.Approve onClick={this.handleAdd(id)}>Add friend</this.Approve>
    ) : (
      <this.Deny onClick={this.handleRemove(id)}>Add friend</this.Deny>
    )
    return !fetched ? (
      <TBMLoader />
    ) : (
      <div>
        <AvatarHeader
        // image={id ? `${config.apiURL}user/${id}/profile-photo` : ''}
        />
        <Header textAlign="center" size="medium">
          {username}
        </Header>
        {actionComponent}
      </div>
    )
  }
}
