'use client';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import MovieLists from '@/components/MoiveLists';
import Link from 'next/link';

const ALL_DATA = gql`
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

const ADD_TWEET = gql`
  mutation {
    postTweet(id: $id) {
      id
      text
      author
    }
  }
`;

export default function Page() {
  // const client = useApolloClient();
  const { loading, error, data } = useQuery(ALL_DATA);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error:', error);
    return <p>Error: {error.message}</p>;
  }

  const onSubmit = () => {
    postTweet({ variables });
  };

  let allMovies = data.allMovies;

  let genreSet = new Set();

  allMovies.forEach((movie) => {
    genreSet.add(...movie.genres);
  });

  const genreArr = [...genreSet];


  return (
    <div>
      {/* query */}
        {genreArr.map((movie, idx) => (
          <Link href={`/movies/?genres=${movie}`} key={idx}>
            <button>
              {movie}
            </button>
          </Link>
        ))}
      
      <h1>무비입니다.</h1>
      <MovieLists movies={data.allMovies} />
      


      <h1>트윗입니다.</h1>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='아이디' />
        <input type='text' placeholder='트윗' />
        <button type='submit'>게시</button>
      </form>
      <ul>
        {data.allTweets.map((tweet) => (
          <li key={tweet.id}>
            <span>{tweet.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
