import { useMoviesContext } from "@/context/movies-context";
import { LinkItem } from "@/types/ui.type";
import React from "react";

function SideLink({ linkData, selectedType }: { linkData: LinkItem, selectedType:string }) {
  const { handleMovieType } = useMoviesContext();
  const getMovieType = () => {
    handleMovieType(linkData.command);
  };
  return (
    <li className="flex justify-between items-center">
      <button
        onClick={getMovieType}
        className={`flex items-center p-2 text-gray-600 rounded-lg w-full
      hover:bg-gray-100  group ${
        selectedType.includes(linkData.command.split("/").join("")) ? "bg-gray-100" : "bg-transparent"
      }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>

        <span className="ms-3">{linkData.title}</span>
      </button>
    </li>
  );
}

export default SideLink;
