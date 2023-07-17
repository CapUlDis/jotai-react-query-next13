import wretch from 'wretch';

import { AllCharactersResponse } from '@/types';

const rickAndMortyApi = wretch('https://rickandmortyapi.com/api');

export const getAllCharacters = async () => rickAndMortyApi
  .url('/character')
  .get()
  .json<AllCharactersResponse>()
  .then((res) => res.results);
