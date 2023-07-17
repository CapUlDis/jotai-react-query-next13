'use client';

import { useAtomValue, atom, useAtom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";
import wretch from 'wretch';

import { AllCharactersResponse } from '@/types';
import { searchAtom } from "./searchAtom";

const rickAndMortyApi = wretch('https://rickandmortyapi.com/api');

export const getAllCharacters = async () => rickAndMortyApi
  .url('/character')
  .get()
  .json<AllCharactersResponse>()
  .then((res) => res.results);

export const [charactersAtom] = atomsWithQuery((get) => ({
  queryKey: ['characters'],
  queryFn: getAllCharacters,
  staleTime: 600000,
}));

export const useCharactersAtom = () => useAtomValue(charactersAtom);

export const filteredCharacters = atom(async (get) => {
  const search = get(searchAtom).toLowerCase();
  const all = await get(charactersAtom);
  return all.filter((char) => char.name.toLowerCase().includes(search));
})

export const useFilteredCharactersAtom = () => useAtomValue(filteredCharacters);
