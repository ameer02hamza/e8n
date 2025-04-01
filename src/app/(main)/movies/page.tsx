"use client";
import ErrorFallback from "@/components/layouts/error-comp";
import LoadingOverlay from "@/components/layouts/loading-overlay";
import NoDataFound from "@/components/layouts/nodata-comp";
import Pagination from "@/components/layouts/pagination";
import LayoutWrapper from "@/components/layouts/wrapper";
import MovieCard from "@/components/ui/movie-card";
import { useMoviesContext } from "@/context/movies-context";
import React, { useCallback, useEffect } from "react";

function MoviesPage() {
  const { loading, movies, fetchMovies, error } = useMoviesContext();
  const [pageNo, setPageNo] = React.useState(1);
  useEffect(() => {
    console.log("%c useEffect", "color:white; background:blue;");
    fetchMovies(1);
  }, []);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      console.log("%c handlePageChange", "color:blue; background:yellow;");
      if (pageNumber === pageNo) return;
      setPageNo(pageNumber);
      fetchMovies(pageNumber);
    },
    [pageNo]
  );
  if (loading) return <LoadingOverlay />;

  if (error) {
    return (
      <ErrorFallback
        error="Theere was an error fetching the movies."
        onRetry={() => {
          fetchMovies(pageNo);
        }}
      />
    );
  }

  if (!movies.results.length) {
    return (
      <NoDataFound
        onClick={() => {
          fetchMovies(pageNo);
        }}
      />
    );
  }

  return (
    <LayoutWrapper>
      <div className="sm:ml-0 min-h-screen  flex flex-col items-center justify-center py-2 mt-14">
        <div className=" flex flex-wrap gap-2 justify-center">
          {movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        {movies.results.length > 0 ? (
          <Pagination
            onPageChange={handlePageChange}
            totalPages={movies.total_pages}
            currentPage={movies.page}
          />
        ) : null}
      </div>
    </LayoutWrapper>
  );
}

export default MoviesPage;
