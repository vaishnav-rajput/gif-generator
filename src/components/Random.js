import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import "../index.css"
import useGifs from "../hooks/useGifs";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(true);

 

    // async function fetchData(){
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
 
    //     const output = await axios.get(url);
    //     setGif(output.data.data.images.downsized_large.url);
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchData()
    // },[])

    const {gif, loading, fetchData} = useGifs();
    return(
        <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl underline mt-[15px] uppercase font-bold">
                Random Gif
            </h1>
            {
            loading ? (<Spinner/>) : (<img  src={gif}/>)
            }
            <button onClick={() => (fetchData())} className="w-9/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
        </div>
    )
}

export default Random;