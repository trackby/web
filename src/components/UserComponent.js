import React from 'react'
import PropTypes from 'prop-types'
import { AvatarHeader, TBMLoader } from 'components'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'

export default class UserComponent extends React.Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired,
    removeFriend: PropTypes.func.isRequired,
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
    const { id, username, fetched, friendshipStatus } = this.props.otherUser
    const actionComponent =
      friendshipStatus === 'NOT_FRIEND' ? (
        <this.Approve onClick={this.handleAdd(id)} href="#">
          Add friend
        </this.Approve>
      ) : (
        <this.Deny onClick={this.handleRemove(id)} href="#">
          Remove friend
        </this.Deny>
      )
    return !fetched ? (
      <TBMLoader />
    ) : (
      <div>
        <AvatarHeader
        // image={id ? `${config.apiURL}user/${id}/profile-photo` : ''}
        />
        <Header textAlign="center" size="medium" inverted>
          {username}
        </Header>
        {friendshipStatus === 'PENDING' ? 'Pending' : actionComponent}
      </div>
    )
  }
}
