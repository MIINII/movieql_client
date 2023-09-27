import Link from 'next/link';
import { ApolloProvider, gql, useApolloClient } from '@apollo/client';
import { useSearchParams } from 'next/navigation';
// import { useEffect } from 'react';
// import client from '@/lib/client';

export default function MovieLists({ movies }) {
  const router = useSearchParams(); // query 가져오기
  const query = router.get('genres');

  const movieFilter = movies.filter((movie) => movie.genres.includes(query));
  

  return (
    <ul>
      {query !== ''
        ? movieFilter.map((movie) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))
        : movies?.map((movie) => (
            <li key={movie.id}>
              {/* params */}
              <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
    </ul>
  );
}
