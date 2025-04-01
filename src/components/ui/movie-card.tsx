"use client";
import { MovieResult} from "@/types/movie.type";
import React from "react";
import IconButton from "./icon-btn";
import { icHeartSelected } from "@/constants/images";

function MovieCard({ movie }: { movie?: MovieResult }) {
  return (
    <article
      className="group flex rounded-radius max-w-sm flex-col cursor-pointer
     overflow-hidden border border-outline bg-surface-alt rounded-xl
     text-on-surface mb-3"
    >
      <div className="h-44 md:h-64 overflow-hidden hover:overflow-visible hover:z-10 w-full">
        <img
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie?.poster_path}`}
          alt={movie?.original_title}
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 bg-white opacity-100 h-72">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-between">
          <div className="flex flex-col">
            <h3
              className="text-lg lg:text-lg font-bold text-on-surface-strong text-gray-800
                "
              aria-describedby="productDescription"
            >
              {movie?.original_title}
            </h3>

            <div className="flex items-center gap-1">
              <span className="sr-only">{movie?.vote_average}</span>
              {Array.from({ length: Math.floor((movie?.vote_average ?? 0)/2) }).map(
                (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-amber-500"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                )
              )}
            </div>
          </div>
          <div className="z-50">
          <IconButton icon={icHeartSelected} /> 
            </div>      
        </div>
        <p
          id="productDescription"
          className="mb-2 text-pretty text-gray-800 text-sm h-40  line-clamp-3"
        >
         {movie?.overview}
        </p>
       <div className="flex items-center justify-between">
        <h1 className="text-sm text-gray-800 font-bold">
            Release Date
        </h1>
       <span className="text-sm text-gray-800 font-bold">
            <span className="sr-only">Release Date</span>
            {movie?.release_date}
          </span>
       </div>
      </div>
    </article>
  );
}

export default MovieCard;
