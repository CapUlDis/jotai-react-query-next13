import './globals.css'
import { QueryClient, dehydrate } from '@tanstack/query-core';

import { getAllCharacters } from '@/api';
import { Providers } from './providers';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['characters'],
    getAllCharacters,
    { staleTime: 600000 },
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <Providers dehydratedState={dehydratedState}>
        <body>{children}</body>
      </Providers>
    </html>
  )
}
