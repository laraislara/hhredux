import React from 'react'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { SearchContainer, MapContainer, VacanciesContainer } from 'containers'
import { SearchContainer } from 'containers'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

const Routes = () => (
    <Router >
      <Container>
       {/* <Header />*/}
        <Route path="/" component={SearchContainer} />
        {/*<Route path="/map" component={MapContainer} />
        <Route path="/vacancies" component={VacanciesContainer} />
        <Footer />*/}
      </Container>
    </Router>
  )

export default Routes
