import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledCard = styled.a`
  width: 30vh;
  height: 20vh;
  background-color: rgba(0, 0, 0, 0.3) !important;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  justify-items: center;
  color: #efefef;
  :hover {
    color: #afafaf;
  }
  margin: 5vh;
`

const BigButton = ({ text, icon, onClick }) => (
  <StyledCard onClick={onClick}>
    <span>{text}</span>
    <div>
      <Icon name={icon} size="huge" />
    </div>
  </StyledCard>
)
BigButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

BigButton.defaultProps = {
  text: '',
  icon: 'plus',
}

export default pure(BigButton)
