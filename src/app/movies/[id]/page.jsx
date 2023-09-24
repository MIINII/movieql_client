'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { gql, useApolloClient, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
  query ($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

export default function Page() {
  // const client = useApolloClient();
  const params = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: {
      movieId: params.id,
    },
  });

  console.log('🍄 ⁝ Page ⁝ data »', data);

  if (!movie) return null;

  return (
    <>
      <h1>test</h1>
    </>
  );
}
