import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '../../utils/test-utils';
import { vi } from 'vitest';
import TrapDoor from './trap-door';
const mockHandleAnimationEnd = vi.fn();
const createTestProps = (custom = {}) => ({
    displayedText: "It's me Mario",
    peek: false,
    handleAnimationEnd: mockHandleAnimationEnd,
    behindDoorImg: '',
    ...custom,
});
describe('TrapDoor', () => {
    it('should render "displayedText"', async () => {
        const props = createTestProps();
        render(_jsx(TrapDoor, { ...props }));
        await screen.findByText("It's me Mario");
    });
});
