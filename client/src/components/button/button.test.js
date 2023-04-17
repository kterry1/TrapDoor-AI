import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, userEvent } from '../../utils/test-utils';
import { vi } from 'vitest';
import Button from './index';
const mockHandleClick = vi.fn();
const createTestProps = (custom = {}) => ({
    displayedText: 'Click Here',
    buttonTheme: 'knock',
    handleClick: mockHandleClick,
    disabled: false,
    ...custom,
});
describe('Button', () => {
    it('should render "displayedText"', async () => {
        const props = createTestProps();
        render(_jsx(Button, { ...props }));
        await screen.findByRole('button');
        await screen.findByText(props.displayedText);
    });
    it('should call mockHandleClick on button click', async () => {
        const props = createTestProps();
        render(_jsx(Button, { ...props }));
        const button = await screen.findByRole('button');
        await userEvent.click(button);
        expect(mockHandleClick).toHaveBeenCalled();
    });
    it('should disable button when "disabled" prop is true', async () => {
        const props = createTestProps({ disabled: true });
        render(_jsx(Button, { ...props }));
        const button = await screen.findByRole('button');
        //@ts-ignore
        expect(button).toBeDisabled();
    });
});
