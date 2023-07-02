import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import "../index.css"


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(true);

 

    async function fetchData(){
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
 
        const output = await axios.get(url);
        setGif(output.data.data.images.downsized_large.url);
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <div>
            <h1>
                Random Gif
            </h1>
            {
            loading ? (<Spinner/>) : (<img  src={gif}/>)
            }
            <button onClick={() => (fetchData())}>Generate</button>
        </div>
    )
}

export default Random;