import React from "react";
import { useMoviesContext } from "@/context/movies-context";
import { useThemeContext } from "@/context/thme-context";

function NavBar() {
  const { handleSearch } = useMoviesContext();
  const { toggleSidebar, openSidebar } = useThemeContext();
  const [searchQuery, setSearchQuery] = React.useState("");
  const toggle = () => {
    toggleSidebar();
  };
  const handleSearchEvent = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 fixed top-0 left-0 w-screen z-[88]">
        <div className="flex flex-nowrap items-center justify-between p-4 md:p-4">
          <button
            onClick={toggle}
            type="button"
            className=" mx-1
            inline-flex items-center p-2 w-10 h-10 justify-center text-sm
             text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            {openSidebar ? (
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div className="flex md:order-2">
            <div className="relative  md:block">
              <div className="flex items-center justify-between">
                <div className="md:w-lg w-sm mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only "
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      onChange={(e) => setSearchQuery(e.target.value)}
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Search Movies...."
                      required
                    />
                    <button
                      onClick={handleSearchEvent}
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
