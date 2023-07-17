'use client';

import { atom, useAtom } from "jotai";

export const searchAtom = atom('asss');

export const useSearchAtom = () => useAtom(searchAtom);
