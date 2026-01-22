import { JSX } from 'react';
import Button from '@mui/material/Button';

type CustonBtnProps = {
  title: string;
  variant?: 'text' | 'outlined' | 'contained';
  onClick: () => void;
};

const CustomBtn = (props: CustonBtnProps): JSX.Element => {
  const { title, variant = 'text', onClick } = props;
  return <Button variant={variant} onClick={onClick}>{title}</Button>;
};

export default CustomBtn;
