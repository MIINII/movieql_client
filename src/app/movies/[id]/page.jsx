'use client';
import { useParams } from 'next/navigation';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      rating
      isLiked @client
    }
  }
`;

export default function Page() {
  const { id } = useParams(); // parameter 가져오기

  const {
    data,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  return (
    <div>
      <h1>{data?.movie?.title}</h1>
      <span>{data?.movie?.rating}</span>
      <img src={data?.movie?.medium_cover_image} />
      <button onClick={onClick}>{data?.movie?.isLiked ? '싫어요' : '좋아요'}</button>
    </div>
  );
}
