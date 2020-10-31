import React, { useState, useEffect, Fragment } from "react";

function CountriesSearch() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(10)
  const [loadingMore, setLoadingMore] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState(countries.slice(start, end))

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight) {
      setLoadingMore(true)
      return;
    }

    setEnd(end + 10)
    setLoadingMore(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchCountries()
  }, [])

  const fetchCountries = async () => {
    await fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((json) => {
        setCountries(json)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    setFilteredCountries(
      countries.slice(start, end).filter((country) =>
        // below both works
        country.name.toLowerCase().includes(search.toLowerCase())
        // country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    )
  }, [search, countries, end])

  return (
    <div className="App">
      {loading ? <p>Loading countries...</p> :
        <div>
          <h1>Countries Lists</h1>
          <p>Total countries: {countries.length}</p>
          {search.length > 0 ? <p>Search results: {filteredCountries.length}</p> : null}
          <input
            type="text"
            placeholder="Search Countries"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 && filteredCountries.length === 0 ? <p>No results found.</p> : null}
          {
            <Fragment>
              {filteredCountries.length > 0 ?
                filteredCountries.map((country, idx) => (
                  <CountryDetail key={idx} {...country} search={search} />
                )) : null}
            </Fragment>
          }
          {loadingMore ? <p>Loding more...</p> : null}
        </div>
      }
    </div>
  );
}

const CountryDetail = (props) => {
  const { name, flag, languages, search } = props
  const [langs, setLangs] = useState([])

  const highlightedText = () => {
    const parts = name.split(new RegExp(`(${search})`, 'gi'));
    return <p><strong>
      {parts.map(part => part.toLowerCase() === search.toLowerCase()
        ? <span className="highlight">{part}</span>
        : part)}
        </strong>
      </p>
  }

useEffect(() => {
  const langss = []
  languages.forEach((lang) => {
    langss.push(lang.name)
  })
  setLangs(langss)
}, [languages])

return (
  <>
    <p>
      <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
    </p>
    {highlightedText()}
    <p><strong>Languages: </strong>{langs.join(", ")}</p>
  </>
);
};

export default CountriesSearch