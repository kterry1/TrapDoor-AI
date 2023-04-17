import { jsx as _jsx } from "react/jsx-runtime";
import './button.css';
const Button = ({ displayedText, buttonTheme, handleClick, disabled = false, }) => {
    return (_jsx("button", { className: `${buttonTheme}-button button`, disabled: disabled, onClick: handleClick, children: displayedText }));
};
export default Button;
