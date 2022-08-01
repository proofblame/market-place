import React from 'react';

export const SvgSprite = ({ sprite, id, className }: any) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};
