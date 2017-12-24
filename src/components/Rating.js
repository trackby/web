import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Rating = ({ value }) => {
  const StyledDiv = styled.div`
    color: #ececec !important;
    font-size: 18px;
    display: inline-block;
    margin: 0 20px;
  `
  return (
    <StyledDiv>
      <Icon name={'star'} />
      <span>{value ? value.toFixed(1) : 0.0}</span>
    </StyledDiv>
  )
}

Rating.propTypes = {
  value: PropTypes.number,
}

Rating.defaultProps = {
  value: 0.0,
}

export default pure(Rating)
