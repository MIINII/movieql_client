'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieLists from '@/components/MoiveLists';

export default function Page() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    // https://yts.mx/api/v2/movie_details.json?movie_id=${id}
    const res = await axios.get(`https://yts.mx/api/v2/list_movies.json`);

    const movieList = res.data.data.movies.slice(10);
    setMovies(movieList);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>무비입니다.</h1>
      <MovieLists movies={movies} />
    </>
  );
}
