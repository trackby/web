import React from 'react'
import PropTypes from 'prop-types'
import { Header, Image, List } from 'semantic-ui-react'
import { AvatarHeader, TBMLoader } from 'components'
import styled from 'styled-components'
import config from 'config'

export default class FriendsComponent extends React.Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired,
    removeFriend: PropTypes.func.isRequired,
    approveRequest: PropTypes.func.isRequired,
    denyRequest: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
  }

  handleApprove = id => () => {
    const { approveRequest } = this.props
    approveRequest(id)
  }

  handleDeny = id => () => {
    const { denyRequest } = this.props
    denyRequest(id)
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
  FriendRequests = () => {
    const requests = this.props.user.friendshipRequests.map(r => (
      <List.Item>
        {/*<Image avatar src={`${config.apiURL}user/${r.id}/profile-photo`} />*/}
        <Image avatar src={'http://placehold.it/300x300'} />
        <List.Content>
          <List.Header as="a">{r.username}</List.Header>
          <List.Description>
            <this.Approve onClick={this.handleApprove(r.id)}>Approve</this.Approve>
            <this.Deny onClick={this.handleDeny(r.id)}>Deny</this.Deny>
          </List.Description>
        </List.Content>
      </List.Item>
    ))
    return <List>{requests}</List>
  }

  Friends = () => {
    const friends = this.props.user.friends.map(f => (
      <List.Item>
        {/*<Image avatar src={`${config.apiURL}user/${f.id}/profile-photo`}/>*/}
        <Image avatar src={'http://placehold.it/300x300'} />
        <List.Content>
          <List.Header as="a">{f.username}</List.Header>
          <List.Description>
            <this.Deny onClick={this.handleRemove(f.id)}>Remove From Friends</this.Deny>
          </List.Description>
        </List.Content>
      </List.Item>
    ))

    return <List>{friends}</List>
  }

  render() {
    const { friendsFetched, friendshipRequestsFetched, id, friends, friendshipRequests } = this.props.user
    const reqsComp =
      friendshipRequests.length > 0 ? (
        <div>
          <Header inverted size="medium" dividing>
            Friendship Requests
          </Header>
          <this.FriendRequests />
        </div>
      ) : null

    const friendsComp =
      friends.length > 0 ? (
        <div>
          <Header inverted size="medium" dividing>
            Friends
          </Header>
          <this.Friends />
        </div>
      ) : null

    return !friendsFetched || !friendshipRequestsFetched ? (
      <TBMLoader />
    ) : (
      <div>
        <AvatarHeader
        // image={id ? `${config.apiURL}user/${id}/profile-photo` : ''}
        />
        {reqsComp}
        {friendsComp}
      </div>
    )
  }
}
