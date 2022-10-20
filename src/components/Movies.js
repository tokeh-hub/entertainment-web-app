import React,{useState} from 'react'
import movie from "../asset/icon-category-movie.svg";
import tv from "../asset/icon-category-tv.svg";
import { BsBookmark } from "react-icons/bs"
import { BsBookmarkFill } from "react-icons/bs"

const Movies = ({searchTerm,moviesList,len,handleBookmark}) => {
  const filtered = moviesList.filter(data=> data.category === "Movie")
  // const [but,setBut] = useState('')
  const [movies,setMovies] = useState(filtered)
 
  
  return(
  <div className='movies'>
  {searchTerm && 
    <div className="search text-white">
      <h1 className="text-3xl mb-4">Found {len} results for {searchTerm}</h1> 
       <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
         {movies.map((data) => {
           var src = data.category === "Movie" ? movie : tv;
         
           return (
             <div className="mr-3 mb-3">
               <div
                 className="relative bg-no-repeat bg-cover bg-center h-48 rounded-md"
                 style={{
                   backgroundImage: `url(${data.thumbnail.regular.large})`,
                 }}
               >
                 <button className="absolute top-1 bg-gray-600 w-10px h-10px rounded-full p-2 right-1" onClick={()=>handleBookmark(data.title,setMovies,movies)}>
                  {data.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
                 </button>
               </div>
               <div>
                 <p className="text-white text-sm flex">
                   <span>{data.year}&nbsp;.&nbsp;</span>
                   <span className="flex justify-center items-center">
                     <img className="h-3" src={src} alt="icon"></img>
                     <p>{data.category}</p>&nbsp;.&nbsp;
                   </span>
                   <span>{data.rating}</span>
                 </p>
                 <p className="font-medium text-white text-sm">{data.title}</p>
               </div>
             </div>
           );
         })}
       </div>
     </div>
}
  {!searchTerm && 
  <div className="movie text-white">
        <h1 className="text-3xl mb-4">Movies</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {movies.map((data) => {
            
            return (
              <div className="mr-3 mb-3" >
                <div
                  className="relative bg-no-repeat bg-cover bg-center h-48 rounded-md"
                  style={{
                    backgroundImage: `url(${data.thumbnail.regular.large})`,
                  }}
                >
                  <button className="absolute top-1 bg-gray-600 w-10px h-10px rounded-full p-2 right-1"  onClick={()=>handleBookmark(data.title)}>
                  {data.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
                  </button>
                </div>
                <div>
                  <p className="text-white text-sm flex">
                    <span>{data.year}&nbsp;.&nbsp;</span>
                    <span className="flex justify-center items-center">
                      <img className="h-3" src={movie} alt="movie icon"></img>
                      <p>{data.category}</p>&nbsp;.&nbsp;
                    </span>
                    <span>{data.rating}</span>
                  </p>
                  <p className="font-medium text-white text-sm">{data.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
}
      </div>
  )
}

export default Movies