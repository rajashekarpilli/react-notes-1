import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import FetchDogs from "./pages/FetchDogs"
import CountriesSearch from './pages/CountriesSearch'
import Counter from "./pages/Counter"
import UserForm from "./pages/UserForm"
import UserIndex from "./pages/react-context-api/UserIndex"
import UseReducerHook from "./pages/react-context-api/use-reducer-hook/UseReducerHook"
import TodosUsingUseReducerHook from "./pages/react-context-api/use-reducer-hook/TodosUsingUseReducer"

function App() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="App">
            <h2 className="mb-4 mt-3">React Notes App</h2>
            {/* <CountriesSearch /> */}
            {/* <Counter /> */}
            {/* <FetchDogs /> */}
            {/* <UserForm /> */}
            {/* <UserIndex /> */}
            {/* <UseReducerHook /> */}
            <TodosUsingUseReducerHook />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App