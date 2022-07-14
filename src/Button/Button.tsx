import React from 'react';
import style from './Button.module.css';

type Props = {
  size?: 'small' | 'medium';
  children: React.ReactNode;
};

export const Button = (props: Props) => {
  return <button className={style.button}>{props.children}</button>;
};
