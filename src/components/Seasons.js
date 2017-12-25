import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { Header, Image, List } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  padding: 20px;
`

const Season = ({ season }) => (
  <List.Item>
    <Image size="mini" src={season.image_url.length > 3 ? season.image_url : 'http://placehold.it/150x150'} />
    <List.Content>
      <List.Header as="a">
        {season.show_name} - Season {season.season_no}
      </List.Header>
      <List.Description>
        {season.info.slice(0, 100)}
        {season.info.length > 100 ? '...' : ''} <b>{season.season_year}</b>
      </List.Description>
    </List.Content>
  </List.Item>
)

const Seasons = ({ seasons }) => {
  const seasonsComponents = seasons.map(s => <Season season={s} />)

  return seasons.length ? (
    <Container>
      <Header size="medium" inverted dividing>
        Seasons
      </Header>
      <List relaxed size="big">
        {seasonsComponents}
      </List>
    </Container>
  ) : null
}

Seasons.propTypes = {
  seasons: PropTypes.array,
}

Seasons.defaultProps = {
  seasons: [],
}

export default pure(Seasons)
