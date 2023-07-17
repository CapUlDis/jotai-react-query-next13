'use client';

import { ChangeEventHandler } from 'react';

import { useSearchAtom, useFilteredCharactersAtom } from '@/store';

export const SearchCharacter = () => {
  const [search, setSearch] = useSearchAtom();

  const onChangeSearchQueryHandle: ChangeEventHandler<HTMLInputElement> = (event) => setSearch(event.target.value);

  const characters = useFilteredCharactersAtom();

  return (
    <div>
      <h2>Search Characters by Name</h2>
      <input type="text" placeholder="Character's Name" value={search} onChange={onChangeSearchQueryHandle} />
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name} * * {character.status}
          </li>
        ))}
      </ul>
    </div>
  );
};
