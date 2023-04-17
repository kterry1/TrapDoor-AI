import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './trap-door.css';
const TrapDoor = ({ displayedText, peek, handleAnimationEnd, behindDoorImg, }) => {
    return (_jsxs("div", { className: peek ? 'trap-door disabled' : 'trap-door', children: [_jsx("div", { className: "trap-door-cover", children: _jsx("div", { className: "trap-door-cover-text", children: displayedText }) }), _jsx("img", { draggable: false, onAnimationEnd: handleAnimationEnd, className: peek ? `animated-img-peek` : `animated-img`, alt: `animated image behind trap door`, src: behindDoorImg })] }));
};
export default TrapDoor;
