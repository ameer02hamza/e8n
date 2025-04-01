import React from "react";
import SideLink from "../ui/sidelink";
import { LinkItem } from "@/types/ui.type";
import { epGET_MOVIES, epPopular, epTopRated, epUpComing } from "@/constants/endpoints";
import { useMoviesContext } from "@/context/movies-context";
import { useAuthContext } from "@/context/auth-context";

function SideBar() {
    const {  selectedType } = useMoviesContext();
    const {logout} = useAuthContext()
    const logoutUser =()=>{        
        logout();
    }
  const sideLinksData: LinkItem[] = [
    {
      title: "Home",
      command: epGET_MOVIES,
    },
    {
      title: "Top Rated",
      command: epTopRated,
    },
    {
      title: "Popular",
      command: epPopular,
    },
    {
      title: "Upcoming",
      command: epUpComing,
    },
  ];
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-20 left-0 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 z-[99]"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4  bg-white ">
        <ul className="space-y-2 font-medium">
          {sideLinksData.map((e, i) => (
            <SideLink key={i} linkData={e}  selectedType={selectedType} />
          ))}
         <li className="flex justify-between items-center">
      <button
        onClick={async()=>{
            logoutUser()
        }}
        className={`flex items-end p-2 text-gray-600 rounded-lg w-full z-50
      hover:bg-gray-100  group
      }`}
      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>


        <span className="ms-3">Logout</span>
      </button>
    </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
