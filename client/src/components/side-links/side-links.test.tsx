import { render, screen } from '../../utils/test-utils';
import SideLinks from './side-links';

describe('Button', () => {
  it('should render two links', async () => {
    render(<SideLinks />);
    await screen.findAllByRole('link', { name: 'link' });
  });
});
