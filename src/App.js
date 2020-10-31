import React, { useState, useEffect, Fragment } from "react"
import FetchDogs from "./pages/FetchDogs"
import CountriesSearch from './pages/CountriesSearch'
import Counter from "./pages/Counter"
import UserForm from "./pages/UserForm"

function App() {
  return(
    <div className="App">
      <h3>App</h3>
      {/* <CountriesSearch /> */}
      <Counter />
      <FetchDogs />
      {/* <UserForm /> */}
    </div>
  )
}

export default App