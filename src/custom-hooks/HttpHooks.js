import React, { useState, useEffect} from 'react'

// GET request
export const useFetch = (url, options) => {
    const [response, setResponse] = React.useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const FetchData = async () => {
            try {
                const res = await fetch(url, options)
                const json = await res.json()
                setResponse(json)
            } catch (error) {
                setError(error)
            }
        }
        FetchData()
    }, [url, options])
    return { response, error }
}