import Random from "./components/Random";
import Tag from "./components/Tag";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
      <h1 className=" w-11/12 text-center mt-[40px] bg-white rounded-lg font-bold  px-10 py-2 text-3xl ">
        Gif Generator
      </h1>
      <div className="flex flex-col w-full  items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/> 
      </div>
    </div>
    )
}
