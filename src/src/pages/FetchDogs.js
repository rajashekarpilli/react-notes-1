import React from 'react'
import { useFetch } from '../custom-hooks/HttpHooks'
import { capitalizeString } from '../utils'
import { useDocumentTitle } from '../custom-hooks/CustomHooks'

function FetchDogs() {
    useDocumentTitle("Fetch Hook")
    const res = useFetch("https://dog.ceo/api/breeds/image/random", {});
    if (!res.response) {
        return <div>Loading...</div>
    }
    const dogName = capitalizeString(res.response.status + "fully fetched dog!!")
    const imageUrl = res.response.message
    return (
        <div>
            <h3>{dogName}</h3>
            <div>
                <img src={imageUrl} alt="avatar" />
            </div>
        </div>
    )
}

export default FetchDogs