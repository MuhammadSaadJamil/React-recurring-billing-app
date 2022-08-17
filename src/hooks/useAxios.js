import axios from "axios";
import {useState, useEffect} from "react";

const useAxios = (url, reverse = false) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${url}`)
            .then(res => {
                if(reverse){
                    setData(res.data.reverse())
                }else{
                    setData(res.data)
                }

            })
            .catch(err => setError(err))
    }, [url])

    return [data, error, JSON.stringify(data) == '{}']
}

export default useAxios