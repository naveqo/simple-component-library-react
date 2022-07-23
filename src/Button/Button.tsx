import React from 'react';
import clsx from 'clsx';
import './../global.css';
import style from './Button.module.css';

type Props = Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> & {
  size?: 'small' | 'medium';
  colorScheme?: 'blue';
  blocked?: boolean;
};

export const Button: React.FC<Props> = ({
  size,
  colorScheme,
  blocked,
  ...props
}) => {
  return (
    <button
      className={clsx(
        style.button,
        style[`${size !== undefined ? size : 'medium'}`],
        style[`${colorScheme !== undefined ? colorScheme : 'blue'}`],
        `${blocked && style.block}`
      )}
    >
      {props.children}
    </button>
  );
};
