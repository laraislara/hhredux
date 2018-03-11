import React from 'react'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SearchContainer, YMapContainer, VacanciesTableContainer } from 'containers'

import styled from 'styled-components'

const Container = styled.div`text-align: center;`

const Routes = () => (
    <Router >
      <Container>
        <Header />
        <Route path="/" component={SearchContainer} />
        <Route path="/map" component={YMapContainer} />
        <Route path="/vacancies" component={VacanciesTableContainer} />
        {/*<Footer />*/}
      </Container>
    </Router>
  )

export default Routes
