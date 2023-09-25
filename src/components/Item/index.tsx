'use client';

import { useArrayAtom } from "@/store"
import { useCallback } from "react";

type Props = {
  id: number;
}

export const Item = ({ id }: Props) => {
  const {removeItem} = useArrayAtom();

  const onClickHandler = useCallback(() => removeItem(id), [id, removeItem]);

  return (
    <div>
      <strong>Item #{id}</strong>
      <button onClick={onClickHandler}>Remove Item</button>
    </div>
  )
}