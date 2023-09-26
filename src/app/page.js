'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/client';

export default function Home() {
  return (
    // <ApolloProvider client={client}>
      <main className={styles.main}>
        <h1>홈 ㅋ</h1>
      </main>
    // </ApolloProvider>
  );
}
