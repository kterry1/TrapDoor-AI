import './button.css';

type ButtonThemeType = 'hover' | 'knock' | 'ai';

export interface ButtonProps {
  displayedText?: string;
  buttonTheme: ButtonThemeType;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({
  displayedText,
  buttonTheme,
  handleClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`${buttonTheme}-button button`}
      disabled={disabled}
      onClick={handleClick}
    >
      {displayedText}
    </button>
  );
};

export default Button;
