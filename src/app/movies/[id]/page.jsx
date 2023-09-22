'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Page() {
  const [movie, setMovie] = useState([]);
  const router = useSearchParams();
  // console.log("🍄 ⁝ Page ⁝ router »", router)
  const id = router.get('movies');
  console.log("🍄 ⁝ Page ⁝ id »", id)

  async function getMovieDetails(targetId) {
    const res = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${targetId}`);
    const nextMovie = res.data.movie;

    setMovie(nextMovie);
  }

  useEffect(() => {
    if (!id) return;

    getMovieDetails(id);
  }, [id]);

  if (!movie) return null;

  return (
    <>
      <h1>test</h1>
    </>
  );
}
