import Link from 'next/link';
import { gql, useApolloClient } from '@apollo/client';
import { useEffect } from 'react';

export default function MovieLists({ movies }) {
  console.log('🍄 ⁝ MovieLists ⁝ movies »', movies);

  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
