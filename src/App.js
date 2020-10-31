import React, { useState, useEffect, Fragment } from "react"
import FetchDogs from "./src/pages/FetchDogs"
import CountriesSearch from './src/pages/CountriesSearch'
import Counter from "./src/pages/Counter"
import UserForm from "./src/pages/UserForm"

function App() {
  return(
    <div className="App">
      <h3>App</h3>
      {/* <CountriesSearch /> */}
      {/* <Counter /> */}
      {/* <FetchDogs /> */}
      <UserForm />
    </div>
  )
}

export default App