# 무비큐엘 client

> graphQL + Next.js 13

```bash
npm run dev
```

---

## 🥸 그래프큐엘로 만든 API 연결하여 랜더링 해보기

1. `client.js` 파일에 `ApolloClient` 인스턴스 생성
2. 최상위 루트에 `<AppoloProvider client={client}>` 지정해주어 모든 하위 페이지들이 모두 api 클라이언트에 접근할 수 있도록 해준다
3. Apollo Client의 `gql` + `useQuery`을 이용하여 서버로 보낼 **'쿼리문을 작성 + 쿼리날리기'** (필요한 데이터만 요청 가능)

   ```gql
   const GET_MOVIE = gql`
    query getMovie($movieId: String!) {
      movie(id: $movieId) {
        id
        title
        medium_cover_image
        rating
        isLiked @client
      }
    }`;
   ```

   ```jsx
   const { loading, data, error } = useQuery(GET_MOVIE);
   ```

4. 요청한 쿼리의 값이 데이터로 꽂힌다
5. 랜더시 쿼리가 자동으로 실행

## Next.js 13

### query? params? body?
> http://localhost:3000/movies/55840?title=%22Demons%20at%20Dawn%22

#### query 가져오기

`'use client'`를 사용했다면 <u>**next/navitaion**</u>에서 불러와야합니다.

```jsx
import { useSearchParams } from 'next/navigation';
...

export default function Page() {
  const router = useSearchParams(); // query 가져오기
  console.log('🍄 ⁝ Page ⁝ router »', router.get('title')); // => Demons at Dawn

  ...
}

```

### params 가져오기