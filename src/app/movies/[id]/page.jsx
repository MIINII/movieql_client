'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import client from '@/lib/client';

const GET_MOVIE = gql`
  query ($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

export default function Page() {

  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },client
  });
  console.log("🍄 ⁝ Page ⁝ data »", data, loading)



  return (
    <>
      <h1>{data.movie.title}</h1>
    </>
  );
}
