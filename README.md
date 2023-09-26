# 무비큐엘 client

> graphQL + Next.js 13

```bash
npm run dev
```

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
5. 요청한 쿼리의 값이 데이터로 꽂힌다
6. 랜더시 쿼리가 자동으로 실행
