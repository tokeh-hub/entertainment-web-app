import {useState,useEffect} from 'react'
import './App.css';
import data from "./data";
import {Routes, Route,useLocation} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Movies from './components/Movies';
import Tvseries from './components/Tvseries';
import Bookmarks from './components/Bookmarks';
import { AiOutlineSearch } from "react-icons/ai";

const bookmarkList = data?.filter((data) => data.isBookmarked === true);
function App() { 
  const path = useLocation().pathname
  const [bookmarked,setBookmarked] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesList, setMoviesList] = useState(data);
  const [len,setLen] = useState()
  const [but,setBut] = useState('')
  

  useEffect(() => {
    var filtered = []
    if(path === "/"){filtered = data.filter((data) => data.title.toLowerCase().includes(searchTerm.toLowerCase()));}
    if (path === "/movies"){filtered = data.filter((data) => data.title.toLowerCase().includes(searchTerm.toLowerCase()) && data.category === "Movie");}
    if (path === "/tv"){filtered = data.filter((data) => data.title.toLowerCase().includes(searchTerm.toLowerCase()) && data.category === "TV Series");}
    if (path === "/bookmark"){filtered = data.filter((data) => data.title.toLowerCase().includes(searchTerm.toLowerCase()) && data.isBookmarked === true);}
    setMoviesList(filtered);
    setLen(filtered.length)
  }, [searchTerm]);


  const handleBookmark = (title,setList,list) =>{
     const item = data.find(val=> val.title === title)
     
     const updated = {...item, isBookmarked: !item.isBookmarked}
     setBut(title)
     var index = data.indexOf(item);

    if (index !== -1) {
    data[index] = updated;
    console.log(data)
}
       setList(data)
       console.log({list})
       return list
   }

   useEffect(()=>{
    
   },[but])
  
  return (
    <div className="App flex flex-col sm:flex-row sm:h-auto h-full bg-very-dark-blue p-3">
         <div className='sidebar basis-1/10 bg-dark-blue rounded-lg mx-3'>
           <Sidebar/>
         </div>

         <div className='main basis-9/10 pt-5 w-full'>
         <div className="w-72 flex justify-center items-center text-white">
        <div className="flex justify-center items-center px-2">
          <AiOutlineSearch className="font-md font-medium" />
        </div>
        <input
          className="w-full bg-transparent hover:outline-none outline-none"
          value={searchTerm}
          placeholder="Search for movies or Tv Series"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
               <Routes>
                      <Route exact path='/' element={<Home len={len} data={data} handleBookmark={handleBookmark} setMoviesList={setMoviesList} searchTerm={searchTerm} moviesList={moviesList} bookmarked={bookmarked} setBookmarked={setBookmarked}/>}/>
                      <Route exact path='/movies' element={<Movies data={data}  searchTerm={searchTerm} len={len} handleBookmark={handleBookmark} moviesList={moviesList}/>}/>
                      <Route exact path='/tv' element={<Tvseries data={data}  searchTerm={searchTerm} len={len} moviesList={moviesList} handleBookmark={handleBookmark}/>}/>
                      <Route exact path='/bookmark' element={<Bookmarks data={data}  searchTerm={searchTerm} len={len} moviesList={moviesList} handleBookmark={handleBookmark} bookmarked={bookmarked} bookmarkList={bookmarkList} />}/>
                 </Routes>
         </div>
    </div>
  );
}

export default App;
