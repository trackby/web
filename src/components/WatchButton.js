import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { FlatButton } from 'components'
import styled from 'styled-components'

const WatchButton = ({ watched, onClick }) => {
  const StyledFlatButton = styled(FlatButton)`
    color: ${watched ? '#1FD325  !important' : '#ECECEC  !important'};
  `

  return (
    <StyledFlatButton size="tiny" compact onClick={onClick}>
      {watched ? 'Watched' : 'Mark as Watched'}
    </StyledFlatButton>
  )
}

WatchButton.propTypes = {
  watched: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

WatchButton.defaultProps = {}

export default pure(WatchButton)
