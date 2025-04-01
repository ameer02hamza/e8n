"use client";
import { getMovies, getMovieType, searchMovies } from "@/services/movies";
import { MovieType } from "@/types/movie.type";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface contextProps {
  movies: MovieType;
  setMovies: Dispatch<SetStateAction<MovieType>>;
  loading: boolean;
  error: boolean;
  selectedType:string
  setError: Dispatch<SetStateAction<boolean>>;
  fetchMovies: (pageNumber: number) => Promise<void>;
  handleSearch: (query: string) => Promise<void>;
  handleMovieType: (query: string) => Promise<void>;
}

const MoviesContext = createContext<contextProps>({
  movies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  selectedType:"discovermovie",
  setMovies: () => {},
  loading: true,
  fetchMovies: async () => {},
  handleSearch: async () => {},
  handleMovieType: async () => {},
  error: false,
  setError: () => {},
});

export function MoviesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [movies, setMovies] = useState<MovieType>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedType, setSelectedMovieType] =useState("discovermovie")
  const fetchMovies = async (pageNumber: number) => {
    console.log("%c fetchMovies", "color:white; background:blue;");

    setError(false);
    setLoading(true);
    try {
      const resp: MovieType = await getMovies(pageNumber);
      setMovies(resp);
    } catch (error) {
      setError(true);
      console.error("Failed to fetch movies:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = async (query: string) => {
    console.log("%c handleSearch", "color:white; background:blue;");
    if (!query) return fetchMovies(1);
    setError(false);
    setLoading(true);
    try {
      const response = await searchMovies(query);
      setMovies(response);
    } catch (error) {
      console.error("Failed to search movies:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleMovieType = async(enpoint:string)=>{
    console.log("%c handleMovieType", "color:white; background:blue;");
    if (!enpoint) return fetchMovies(1);
    setError(false);
    setLoading(true);
    try {
        setSelectedMovieType(enpoint.split("/").join(""))
      const response = await getMovieType(enpoint);
      setMovies(response);
    } catch (error) {
      console.error("Failed to search movies:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <MoviesContext.Provider
      value={{
        movies,
        error,
        setError,
        setMovies,
        loading,
        selectedType,
        fetchMovies,
        handleSearch,
        handleMovieType
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export const useMoviesContext = () => useContext(MoviesContext);
