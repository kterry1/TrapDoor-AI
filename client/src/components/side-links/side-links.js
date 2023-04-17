import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './side-links.css';
import githubSVG from '../../assets/github.svg';
import linkedInSVG from '../../assets/linkedin.svg';
const SideLinks = () => {
    return (_jsxs("div", { className: "side-links-container", children: [_jsx("a", { "aria-label": "link", href: "https://github.com/kterry1", children: _jsx("img", { className: "link", alt: "external github link", src: githubSVG }) }), _jsx("a", { "aria-label": "link", href: "https://www.linkedin.com/in/kevin-terry-engineer", children: _jsx("img", { className: "link", alt: "external linkedIn link", src: linkedInSVG }) })] }));
};
export default SideLinks;
