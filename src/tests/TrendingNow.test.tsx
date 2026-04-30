import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieList from '@/components/MovieList';
// import type { MovieListTest } from '@/types';
import { test, expect } from 'vitest';

// const mockList: MovieListTest = [
//         {
//             id: 1,
//             title: 'Inception',
//             poster_path: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg'
//         },
//         {
//             id: 2,
//             title: 'FNAF',
//             poster_path: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg'
//         },
//         {
//             id: 3,
//             title: 'The Witcher',
//             poster_path: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg'
//         },
//         {
//             id: 4,
//             title: 'Fate',
//             poster_path: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg'
//         },
//     ]

test('Trending now renders individual movies in a list', () => {
    render(<MovieList />)
    const singleMovie = screen.getAllByRole('listitem')
    expect(singleMovie).toHaveLength(4)
})