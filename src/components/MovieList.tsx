import MovieCard from "./MovieCard";
import { useInfiniteMovies } from "@/lib/useInfiniteMovies";
import { useRef, useEffect } from "react";

const MovieList = () => {
    let movieArr = []

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteMovies();
    const movies = data?.pages.flatMap(page => page.results) ?? [];
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!loadMoreRef.current || !hasNextPage) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            {
                root: document.getElementById('trending_list'),
                threshold: 1,
                rootMargin: '1000px',
            });
        observer.observe(loadMoreRef.current)
        return () => observer.disconnect();
    }, [fetchNextPage, hasNextPage, isFetchingNextPage])

    for(let i = 0; i < movies?.length; ++i){{
        movieArr.push(
            <div key={movies[i].id} ref={loadMoreRef}>
                <li  className="overflow-scroll">
                    <MovieCard movie={movies[i]}/>
                    {i<20 && <h1 className="movie_num absolute top-[55%] -translate-x-2.5 z-11 text-7xl font-black text-shadow-lg opacity-[.7]">
                        {i+1}
                    </h1>}
                </li>
            </div>
        )}
    }
        return(
            <div>
                <ul id="trending_list" className="flex overflow-x-scroll overflow-y-visible space-x-4 px-4 md:px-6 py-4 scrollbar-hide relative">
                    {movieArr}
                </ul>
            </div>
        )
}

export default MovieList