import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'

const ImageHeader = ({ image, title, info, bottomLeftChildren, bottomRightChildren, topRightChildren }) => {
  const HeaderContainer = styled.div`
    background-image: url(${image});
    display: flex;
    align-items: flex-end;
    background-position: center top;
    background-size: 100% auto;
    width: 100vw;
    height: 70vh;
    background-repeat: no-repeat;
    color: #ececec;
    .image-header-grid {
      margin: 0;
      background-color: rgba(0, 0, 0, 0.35);
      width: 100%;
    }
  `

  return (
    <HeaderContainer>
      <Grid className="image-header-grid" textAlign="left" columns="equal">
        <Grid.Row className="grid-content">
          <Grid.Column width={10}>
            <h1>{title}</h1>
            {info}
          </Grid.Column>
          <Grid.Column width={6}>{topRightChildren}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column floated="left" width={4}>
            {bottomLeftChildren}
          </Grid.Column>
          <Grid.Column textAlign="right" width={12}>
            {bottomRightChildren}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </HeaderContainer>
  )
}

ImageHeader.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  bottomLeftChildren: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  bottomRightChildren: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  topRightChildren: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

ImageHeader.defaultProps = {
  title: '',
  info: '',
  image: 'http://www.awardsdaily.com/tv/wp-content/uploads/2016/05/mr.-robot-key-art.jpg',
  bottomLeftChildren: [],
  bottomRightChildren: [],
  topRightChildren: [],
}

export default pure(ImageHeader)
