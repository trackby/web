import React from 'react'
import PropTypes from 'prop-types'
import { createSelector, createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UserLink = ({ username, id, user }) => {
  const link = username === user.username || user.id === id ? '/profile' : `/user/${username}-${id}`
  return <Link to={link}>{username}</Link>
}

UserLink.propTypes = {
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  user: createSelector(state => state.user, user => user),
})

export default connect(mapStateToProps)(UserLink)
