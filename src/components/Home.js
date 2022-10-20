import React, {useEffect, useState} from "react";
// import { AiOutlineSearch } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import movie from "../asset/icon-category-movie.svg";
import tv from "../asset/icon-category-tv.svg";

const Home = ({setMoviesList, moviesList,searchTerm,len,handleBookmark}) => {
  return (
    <div className="home">
     {searchTerm && 
     <div className="search text-white">
      
       <h1 className="text-3xl mb-4">Found {len} results for {searchTerm}</h1> 
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {moviesList.map((data) => {
           
            var src = data.category === "Movie" ? movie : tv;
            
            return (
              <div className="mr-3 mb-3">
                <div
                  className="relative bg-no-repeat bg-cover bg-center h-48 rounded-md"
                  style={{
                    backgroundImage: `url(${data.thumbnail.regular.large})`,
                  }}
                >
                  <button className="absolute top-1 bg-gray-600 w-10px h-10px rounded-full p-2 right-1" onClick={()=>handleBookmark(data.title,setMoviesList,moviesList)}>
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
      {!searchTerm && <div className="trending text-white">
       <h1 className="text-3xl mb-4">Trending</h1> 
        <div className="flex overflow-x-auto">
          {moviesList.map((data, index) => {
            var src = data.category === "Movie" ? movie : tv;
            return data.isTrending ? (
              <div
                className="relative bg-no-repeat bg-cover bg-center h-48 flex-3 md:flex-2 mr-3 mb-3 rounded-md"
                style={{
                  backgroundImage: `url(${data.thumbnail.trending.small})`,
                }}
                key={index}
              >
                
                <button className="absolute top-1 bg-gray-600 w-10px h-10px rounded-full p-2 right-1" onClick={()=>handleBookmark(data.title,setMoviesList,moviesList)}>
                  {data.isBookmarked? <BsBookmarkFill /> : <BsBookmark />}
                </button>
                <div className="absolute bottom-px left-px p-2">
                  <p className="text-white text-sm flex">
                    <span>{data.year}&nbsp;.&nbsp;</span>
                    <span className="flex justify-center items-center">
                      <img className="h-3" src={src} alt="icon"></img>
                      <span>{data.category}</span>&nbsp;.&nbsp;
                    </span>
                    <span>{data.rating}</span>
                  </p>
                  <p className="font-medium text-white text-sm">{data.title}</p>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
}
     {!searchTerm && 
     <div className="recommended text-white">
       <h1 className="text-3xl mb-4">Recommended For You</h1> 
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {moviesList.map((data) => {
            var src = data.category === "Movie" ? movie : tv;
            return (
              <div className="mr-3 mb-3">
                <div
                  className="relative bg-no-repeat bg-cover bg-center h-48 rounded-md"
                  style={{
                    backgroundImage: `url(${data.thumbnail.regular.large})`,
                  }}
                >
                  <button className="absolute top-1 bg-gray-600 w-10px h-10px rounded-full p-2 right-1" onClick={()=>handleBookmark(data.title,setMoviesList,moviesList)}>
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
    </div>
  );
};

export default Home;
