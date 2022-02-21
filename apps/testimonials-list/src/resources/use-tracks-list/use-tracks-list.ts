import { useQuery } from 'react-query';

import axiosInstance from '../../api';

// Generated by https://quicktype.io

export interface TracksResponse {
  tracks: Track[];
}

export interface Track {
  slug: string;
  title: string;
  course: boolean;
  num_concepts: number;
  num_exercises: number;
  web_url: string;
  icon_url: string;
  tags: string[];
  last_touched_at: null | string;
  is_new: boolean;
  links: Links;
  is_joined?: boolean;
  num_learnt_concepts?: number;
  num_completed_exercises?: number;
  num_solutions?: number;
  has_notifications?: boolean;
}

export interface Links {
  self: string;
  exercises: string;
  concepts: string;
}

async function getTrackList() {
  const response = await axiosInstance.get<unknown, TracksResponse>('tracks');

  return response.tracks;
}

export function useTracksList() {
  return useQuery('tracks-list', getTrackList);
}

export default useTracksList;