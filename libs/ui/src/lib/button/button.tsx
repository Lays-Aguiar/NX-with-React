import React from 'react';

import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLButtonElement>;
}

export function Button({ children, ref, ...rest }: ButtonProps) {
  return <S.Button {...rest}>{children}</S.Button>;
}
