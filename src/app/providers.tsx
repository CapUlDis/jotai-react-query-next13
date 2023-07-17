'use client';

import { useState, PropsWithChildren } from 'react';
import { Provider } from 'jotai/react'
import { useHydrateAtoms } from 'jotai/react/utils'
import {
  QueryClient,
  QueryClientProvider,
  DehydratedState,
  hydrate,
  Hydrate
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClientAtom } from 'jotai-tanstack-query'

const HydrateAtoms = ({ queryClient, children }: PropsWithChildren<{ queryClient: QueryClient }>) => {
  useHydrateAtoms([[queryClientAtom, queryClient]]);
  return children;
};

type Props = {
  dehydratedState: DehydratedState;
}

export const Providers = ({ dehydratedState, children }: PropsWithChildren<Props>) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }));

  hydrate(queryClient, dehydratedState);


  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <Provider>
          <HydrateAtoms queryClient={queryClient}>{children}</HydrateAtoms>
        </Provider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}