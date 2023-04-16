import { render, screen, userEvent } from '../../utils/test-utils';
import { vi } from 'vitest';
import TrapDoor from './trap-door';
import { TrapDoorProps } from './trap-door';

const mockHandleAnimationEnd = vi.fn();

const createTestProps = (
  custom: Partial<TrapDoorProps> = {},
): TrapDoorProps => ({
  displayedText: "It's me Mario",
  peek: false,
  handleAnimationEnd: mockHandleAnimationEnd,
  behindDoorImg: '',
  ...custom,
});

describe('TrapDoor', () => {
  it('should render "displayedText"', async () => {
    const props = createTestProps();
    render(<TrapDoor {...props} />);
    await screen.findByText("It's me Mario");
  });
});
