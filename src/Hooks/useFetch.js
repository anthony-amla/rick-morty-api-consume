import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(Url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    let url = Url
    useEffect(() => {
        axios.get(url)
            .then((ResponseData) => {
                setData(ResponseData.data)
            }).catch((err) => {
                setError(err)
            }).finally(() => {
                setIsFetching(false)
            })
    },[url])
    return { data, error, isFetching }
}

