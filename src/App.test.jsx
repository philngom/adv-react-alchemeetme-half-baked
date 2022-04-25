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
    <App />
  )

  return waitFor(() => {
    screen.findByText('Meet Vonta');
  })
});
