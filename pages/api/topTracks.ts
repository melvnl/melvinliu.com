/* eslint-disable import/no-anonymous-default-export */
import { getTopTracks } from "@/lib/spotify";

export default async (_: any, res: any) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 5).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
    album: track.album.images[0].url,
  }));

  return res.status(200).json(tracks);
};
