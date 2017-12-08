import React from 'react'
import pure from 'recompose/pure'
import {Dimmer, Loader, Image, Segment} from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
  height:100vh;
  width:100vw;
  background-color:rgba(0,0,0,.85);
`

const TBMLoader = () => (
  <Container>

      <Dimmer active>
        <Loader size='massive'/>
      </Dimmer>

  </Container>
);


export default pure(TBMLoader)
