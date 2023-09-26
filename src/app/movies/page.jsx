'use client';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import MovieLists from '@/components/MoiveLists';

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
  
  const client = useApolloClient();
  const { loading, error, data } = useQuery(ALL_MOVIES, {client});

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error:', error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>무비입니다.</h1>
      <MovieLists movies={data.allMovies} />
    </div>
  );
}
