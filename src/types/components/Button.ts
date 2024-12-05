export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'white' | 'black';
  size?: 'small' | 'medium' | 'large';
}

export interface ButtonStyleProps {
  variant?: 'white' | 'black';
  size?: 'small' | 'medium' | 'large';
}
