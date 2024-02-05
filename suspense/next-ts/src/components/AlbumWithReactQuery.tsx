'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getAlbumData } from '@/apis';

export default function AlbumWithReactQuery() {
  const { data } = useSuspenseQuery({
    queryKey: ['album'],
    queryFn: getAlbumData,
  });

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
