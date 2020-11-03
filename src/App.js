import React, { useState, useEffect, Fragment } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import FetchDogs from "./pages/FetchDogs"
import CountriesSearch from './pages/CountriesSearch'
import Counter from "./pages/Counter"
import UserForm from "./pages/UserForm"
import UserIndex from "./pages/react-context-api/UserIndex"

function App() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="App">
            <h2>Practice App</h2>
            {/* <CountriesSearch /> */}
            {/* <Counter />
            <FetchDogs /> */}
            {/* <UserForm /> */}
            <UserIndex />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App