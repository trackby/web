import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import {FlatButton} from 'components'
import styled from 'styled-components'

const WatchButton = ({isWatched, onClick}) => {


  const StyledFlatButton = styled(FlatButton)`
    color: ${props => props.isWatched ? '#1FD325  !important' : '#ECECEC  !important'}  
  `

  return (
    <StyledFlatButton isWatched={isWatched} size='tiny' compact
                      onClick={onClick}>{isWatched ? 'Watched' : 'Mark as Watched'}</StyledFlatButton>
  )
}

WatchButton.propTypes = {
  isWatched: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

WatchButton.defaultProps = {}


export default pure(WatchButton)
