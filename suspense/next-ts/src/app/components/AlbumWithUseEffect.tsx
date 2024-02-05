'use client';

import { useEffect, useState } from 'react';
import { getAlbumData } from '@/apis';
import { useGetAlbumData } from '@/hooks';

type AlbumType = {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
};

export default function AlbumWithUseEffect() {
  const albumData = useGetAlbumData();

  return (
    <div>
      {albumData.map((it) => (
        <div key={it.id}>
          <img src={it.thumbnailUrl} alt={it.title} />
          <a href={it.url}>{it.title}</a>
        </div>
      ))}
    </div>
  );
}
