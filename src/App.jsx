import Random from "./components/Random";
import Tag from "./components/Tag";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

export default function App() {
  return (
    <div>
      <h1>
        Gif Generator
      </h1>
      <div>
        <Random/>
        <Tag/> 
      </div>
    </div>
    )
}
