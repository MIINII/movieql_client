import Link from 'next/link';
import { ApolloProvider, gql, useApolloClient } from '@apollo/client';
import { useSearchParams } from 'next/navigation';
// import { useEffect } from 'react';
// import client from '@/lib/client';

export default function MovieLists({ movies }) {
  const router = useSearchParams(); // query 가져오기
  const query = router.get('genres');

  const test = movies.filter((movie,idx) => movie.genres.includes(query));
  console.log("🍄 ⁝ MovieLists ⁝ test »", test)
  

  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie.id}>
          {/* params */}
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}

      {/* {(query !== '') ? (movies.filter((genre)=>{genre.includes(query)})) : 'null'} */}
    </ul>
  );
}
