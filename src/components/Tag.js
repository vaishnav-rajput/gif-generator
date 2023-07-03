import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import "../index.css"
import useGifs from "../hooks/useGifs";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(true);
    const [tag, setTag] = useState("car")
 

    // async function fetchData(tag){
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
 
    //     const output = await axios.get(url);
    //     setGif(output.data.data.images.downsized_large.url);
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchData(tag)
    // },[])

    const {gif, loading, fetchData} = useGifs(tag);

 
    return(
        <div >
            <h1>
                Random {tag.toUpperCase()} Gif
            </h1>
            {
            loading ? (<Spinner/>) : (<img  src={gif}/>)
            }

            <input onChange={(event) => setTag(event.target.value)} type="text" value={tag} />
            <button onClick={() => (fetchData(tag))}>Generate</button>
        </div>
    )
}

export default Tag;