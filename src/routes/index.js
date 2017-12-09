import React from 'react'
// import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import ComingSoonContainer from "../containers/ComingSoonContainer";

const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <Container>
        {/*<Header />*/}
        <Route path="/" component={ComingSoonContainer} />
      </Container>
    </Router>
  )
}

export default Routes
