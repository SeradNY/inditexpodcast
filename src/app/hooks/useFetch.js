import { useEffect, useState } from "react"
import diffHours from "../utlis/diffHours"

export default function useFetch(url, type = null) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    var date = new Date();
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    if (window.localStorage[type] && diffHours(window.localStorage[`timestamp-${type}`], today) < 2) {
                        setData(JSON.parse(window.localStorage[type]))
                    } else {
                        fetch(`${url}`)
                            .then(response => response.json())
                            .then(data => {
                                setData(data);
                                window.localStorage[type] = JSON.stringify(data)
                                window.localStorage[`timestamp-${type}`] = today
                            });
                    }
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [today, type, url])

    return { data, error, loading }
}