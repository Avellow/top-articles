import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...restProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </button>
  )
}
export { Button };