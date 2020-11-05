import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import FetchDogs from "./pages/FetchDogs"
import CountriesSearch from './pages/CountriesSearch'
import Counter from "./pages/Counter"
import UserForm from "./pages/UserForm"
import UserIndex from "./pages/react-context-api/UserIndex"
import UseReducerHook from "./pages/use-reducer-hook/UseReducerHook"
import TodosUsingUseReducerHook from "./pages/use-reducer-hook/TodosUsingUseReducer"
import UseMemoHook from "./pages/use-memo-hook/UseMemoHook"
import UseCallbackHook from "./pages/use-callback-hook/UseCallbackHook"
import ReactMemoUseMemoUseCallback from "./pages/reactmemo-use-memo-usecallback/ReactMemoUseMemoUseCallback"

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
            {/* <TodosUsingUseReducerHook /> */}
            {/* <UseMemoHook /> */}
            {/* <UseCallbackHook /> */}
            <ReactMemoUseMemoUseCallback />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App