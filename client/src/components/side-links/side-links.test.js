import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '../../utils/test-utils';
import SideLinks from './side-links';
describe('Button', () => {
    it('should render two links', async () => {
        render(_jsx(SideLinks, {}));
        await screen.findAllByRole('link', { name: 'link' });
    });
});
