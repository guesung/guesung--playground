import { AlbumType } from '@/types';

export const getAlbumData = async function (): Promise<AlbumType[]> {
  const res = await fetch('/api/album');
  const { data } = await res.json();
  return data;
};
