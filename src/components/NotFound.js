import React from 'react'
import pure from 'recompose/pure'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
`

const NotFound = () => (
  <Container>
    <Header inverted>404 NOT FOUND</Header>
  </Container>
)

export default pure(NotFound)
