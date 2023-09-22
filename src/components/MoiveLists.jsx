import Link from 'next/link';

export default function MovieLists({ movies }) {
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
