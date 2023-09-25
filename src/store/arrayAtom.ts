'use client';

import { useAtomValue, useSetAtom } from "jotai";
import { withImmer } from "jotai-immer";
import { atomWithStorage } from "jotai/vanilla/utils";
import { useCallback } from "react";

export type Item = {
  id: number;
}

const STORAGE_KEY = 'ATOM_STORAGE';

const initialValue = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const arrayAtom = atomWithStorage<Item[]>(STORAGE_KEY, initialValue);

export const useArrayAtomValue = () => useAtomValue(arrayAtom);

const arrayAtomImmer = withImmer(arrayAtom);

export const useArrayAtom = () => {
  const setState = useSetAtom(arrayAtomImmer);

  const addItem = useCallback(() => setState((draft) => {
    draft.push({ id: (draft.at(-1)?.id ?? 0) + 1 });
    return draft;
  }), [setState]);
  
  const removeItem = useCallback(
    (id: number) => setState((draft) => draft = draft.filter((item) => item.id !== id)),
    [setState],
  );

  const reset = useCallback(() => setState((draft) => draft = []), [setState]);

  return {
    addItem,
    removeItem,
    reset,
  };
};

