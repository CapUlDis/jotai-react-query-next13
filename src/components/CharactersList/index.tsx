'use client';

import { useCharactersAtom } from "@/store";

export const CharactersList = () => {
  const characters = useCharactersAtom();

  return (
    <div>
      <h2>Character's List</h2>
        <ul>
          {characters.map((char) => (
            <li key={char.id}>
              {char.name} * {char.species}
            </li>
          ))}
        </ul>
    </div>
  );
};

