'use client';
import { useState, useEffect } from 'react';

import MovieLists from '@/components/MoiveLists';
import { ApolloProvider, gql, useQuery } from '@apollo/client';
import client from '@/lib/client';

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
      genres
      background_image
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

export default function Page() {
  const { loading, error, data } = useQuery(ALL_MOVIES, { client });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error:', error);
    return <p>Error: {error.message}</p>;
  }

  console.log('Data:', data); // 데이터 로깅

  return (
    <ApolloProvider client={client}>
      <h1>무비입니다.</h1>
      <MovieLists movies={data.allMovies} />
      <h1>트윗입니다</h1>
      {data.allTweets.map((tweet) => (
        <li key={tweet.id}>{tweet.text}</li>
      ))}
    </ApolloProvider>
  );
}
