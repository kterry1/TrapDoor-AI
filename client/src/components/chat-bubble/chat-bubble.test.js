import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '../../utils/test-utils';
import { vi } from 'vitest';
import ChatBubble from './chat-bubble';
const mockHandleReset = vi.fn();
const mockHandleExit = vi.fn();
const createTestProps = (custom = {}) => ({
    data: 'I am sentient',
    handleReset: mockHandleReset,
    handleExit: mockHandleExit,
    ...custom,
});
describe('ChatBubble', () => {
    const props = createTestProps();
    afterEach(() => {
        vi.resetAllMocks();
    });
    it('should render data passed down by props', async () => {
        render(_jsx(ChatBubble, { ...props }));
        await screen.findByText(`AI: ${props.data}`);
    });
});
