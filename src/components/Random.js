import axios from "axios";
import React, { useEffect, useState } from "react";
// let API_KEY = {import.meta.env.VITE_REACT_APP_GIPHY_API_KEY};

const Random = () => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState("");

 

    async function fetchData(){
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_SOMETHING}`
 
        const output = await axios.get(url);
        console.log(output)
    }

    useEffect(() => {
const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_SOMETHING}`
        console.log(url)
    })

    return(
        <div>
            <h1>
                Random Gif
            </h1>
            <img src={gif} />
            <button>Generate</button>
        </div>
    )
}

export default Random;