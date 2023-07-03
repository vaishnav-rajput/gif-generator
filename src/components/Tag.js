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
        <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl underline mt-[15px] uppercase font-bold">
                Random {tag.toUpperCase()} Gif
            </h1>
            {
            loading ? (<Spinner/>) : (<img  src={gif}/>)
            }

            <input className="w-9/12 text-lg py-2 rounded-lg mb-[2px] text-center" onChange={(event) => setTag(event.target.value)} type="text" value={tag} />
            <button  className="w-9/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]" onClick={() => (fetchData(tag))}>Generate</button>
        </div>
    )
}

export default Tag;