import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import AlbumWithReactQuery from '../components/AlbumWithReactQuery';
import AlbumWithUseEffect from '../components/AlbumWithUseEffect';
import QueryProvider from '../components/QueryProvider';

const AlbumWithLazyLoading = React.lazy(() => import('../components/AlbumWithUseEffect'));
const AlbumWithDynamicImport = dynamic(() => import('../components/AlbumWithUseEffect'));

export default function Home() {
  return (
    <QueryProvider>
      <h1>AlbumWithUseEffect</h1>
      <Suspense fallback={<Loading />}>
        <AlbumWithUseEffect />
      </Suspense>
      <h1>AlbumWithLazyLoading</h1>
      <Suspense fallback={<Loading />}>
        <AlbumWithLazyLoading />
      </Suspense>
      <h1>AlbumWithLazyLoading</h1>
      <Suspense fallback={<Loading />}>
        <AlbumWithDynamicImport />
      </Suspense>
      <h1>AlbumWithReactQuery</h1>
      <Suspense fallback={<Loading />}>
        <AlbumWithReactQuery />
      </Suspense>
    </QueryProvider>
  );
}

function Loading() {
  return (
    <div className="bg-black">
      <h1>Loading...</h1>
      <h1>Loading...</h1>
      <h1>Loading...</h1>
      <h1>Loading...</h1>
      <h1>Loading...</h1>
      <h1>Loading...</h1>
    </div>
  );
}
