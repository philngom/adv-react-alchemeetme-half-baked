import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Should render the header', async () => {
  render(
      <MemoryRouter >
        <App />
      </MemoryRouter>
    )

    const header = screen.getByRole('banner');
    const logo = await screen.findByAltText('Alchemy Logo');
    const profileName = await screen.findByText(/vonta/i);
    expect(logo).toBeInTheDocument();
    expect(profileName).toBeInTheDocument();
    expect(header).toBeInTheDocument();
});
