import MovieCard from '@/components/MovieCard' 
import { createFileRoute } from '@tanstack/react-router';
import performSearch from '@/lib/performSearch';
import { useInfiniteMovies } from '@/lib/useInfiniteMovies';

export const Route = createFileRoute('/search')(
  { component: SearchComponent }) 

  function SearchComponent() { 
    const search = Route.useSearch() as Record<string, string | undefined>;
    // const { baseMovies } = Route.useLoaderData()
    const { data } = useInfiniteMovies();
    const movies = data?.pages.flatMap(page => page.results) ?? [];
    const movie = search.movie ?? '' ;
    console.log(movie)
    const results = performSearch(movie, movies).data;
  return ( 
    <div className='row relative mx-auto mt-6 max-w-6xl px-6'>
      <h2 className='text-2xl font-semibold mt-6'>Search result for: "{movie}"</h2> 

      <div aria-live='polite' aria-atomic='true' className='sr-only'>
        {movie ? `${results.length} results for ${movie}` : `${results.length} results`}
      </div>

      {results.length > 0 ? ( 
        <div className='mt-8 p-8 flex flex-wrap gap-y-4 '> 
            {results.map((movie) => 
            <MovieCard key={movie.id} movie={movie} /> )} 
        </div> ) : 
       <h2>No Movie Found</h2> } 
    </div>) }


