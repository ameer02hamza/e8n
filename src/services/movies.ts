import { epGET_MOVIES, epSearch_Movies } from "@/constants/endpoints";
import tmdbAgent from "./repositories/tmdbAgent";
import { MovieType } from "@/types/movie.type";

export const getMovies = async (pageNumber: number): Promise<MovieType> => {
  return await tmdbAgent.get(
    `${epGET_MOVIES}?page=${pageNumber}&sort_by=popularity.desc`
  );
};

export const searchMovies = async (query: string): Promise<MovieType> => {
  return await tmdbAgent.get(`${epSearch_Movies}${query}&page=1`);
};

export const getMovieType = async(endpoint:string): Promise<MovieType> => {
    return await tmdbAgent.get(
        `${endpoint}`
      );
}
