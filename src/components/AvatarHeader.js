import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'
import { Image } from 'semantic-ui-react'

const HeaderContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 50%);
  width: 100vw;
  height: 70vh;
  color: #ececec;
  padding-top: 20vh;
`

const FixedSizeImage = styled(Image)`
  width: 30vh;
  height: 30vh;
`

const AvatarHeader = ({ image }) => (
  <HeaderContainer>
    <FixedSizeImage src={image} circular centered />
  </HeaderContainer>
)

AvatarHeader.propTypes = {
  image: PropTypes.string,
}

AvatarHeader.defaultProps = {
  image: 'http://www.placehold.it/300x300',
}

export default pure(AvatarHeader)
