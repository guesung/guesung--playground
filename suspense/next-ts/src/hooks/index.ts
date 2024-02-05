import { AlbumType } from '@/types';
import { useEffect, useState } from 'react';

export const useGetAlbumData = () => {
  const [albumData, setAlbumData] = useState<AlbumType[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/album');
      const { data } = await res.json();
      setAlbumData(data);
    })();
  }, []);
  return albumData;
};
