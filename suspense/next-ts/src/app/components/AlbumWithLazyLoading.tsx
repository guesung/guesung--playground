'use client';

import { useEffect, useState } from 'react';
import { getAlbumData } from '@/apis';

type AlbumType = {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
};

export default function AlbumWithLazyLoading() {
  const [data, setData] = useState<AlbumType[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAlbumData();
      setData(data);
    })();
  }, []);

  return (
    <div>
      {data &&
        data.map((it) => (
          <div key={it.id}>
            <img src={it.thumbnailUrl} alt={it.title} />
            <a href={it.url}>{it.title}</a>
          </div>
        ))}
    </div>
  );
}
