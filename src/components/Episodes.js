import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { Header, Image, List } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  padding: 20px;
`

const Episode = ({ episode }) => (
  <List.Item>
    <Image
      size="mini"
      src={episode.image_url && episode.image_url.length > 3 ? episode.image_url : 'http://placehold.it/150x150'}
    />
    <List.Content>
      <List.Header as="a">{episode.episode_name}</List.Header>
      <List.Description>
        {episode.info.slice(0, 100)}
        {episode.info.length > 100 ? '...' : ''}}
      </List.Description>
    </List.Content>
  </List.Item>
)

const Episodes = ({ episodes }) => {
  const episodeComponents = episodes.map(e => <Episode episode={e} />)

  return episodes.length ? (
    <Container>
      <Header size="medium" inverted dividing>
        Episodes
      </Header>
      <List relaxed="very" size="big">
        {episodeComponents}
      </List>
    </Container>
  ) : null
}

Episodes.propTypes = {
  episodes: PropTypes.array,
}

Episodes.defaultProps = {
  episodes: [],
}

export default pure(Episodes)
