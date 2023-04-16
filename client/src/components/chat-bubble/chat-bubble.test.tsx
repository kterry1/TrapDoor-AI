import { render, screen } from '../../utils/test-utils';
import { vi } from 'vitest';
import ChatBubble from './chat-bubble';
import { ChatBubbleProps } from './chat-bubble';

const mockHandleReset = vi.fn();
const mockHandleExit = vi.fn();

const createTestProps = (
  custom: Partial<ChatBubbleProps> = {},
): ChatBubbleProps => ({
  data: 'I am sentient', // TODO: add msw to mock data coming in from open.ai api
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
    render(<ChatBubble {...props} />);
    await screen.findByText(`AI: ${props.data}`);
  });
});
