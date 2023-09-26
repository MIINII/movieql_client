'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/client';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: '으아아각',
//   description: '넥스트바보',
// };

export default function RootLayout({ children }) {
  return (
    <html lang='ko-KR'>
      <ApolloProvider client={client}>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
