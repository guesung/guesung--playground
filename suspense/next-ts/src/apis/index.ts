import { AlbumType } from '@/types';

export const getAlbumData = async function (): Promise<AlbumType[]> {
  const response = await fetch('http://localhost:3000/api/album');
  const { data } = await response.json();
  return data;
};
