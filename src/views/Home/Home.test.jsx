import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from './Home';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(
      <Home user={user}/>
  )
    // find h1 tag (level: 1), fails test if not found
    screen.getByRole('heading', { level: 1, name: user.name });

    screen.getByRole('heading', { level: 2, name: 'Interests' });

    // will fail test if not found
    await screen.findByText(/Res Non Verba/i);

    // tests for users likes
    const interestsList = await screen.getAllByRole('listitem');
    expect(interestsList).toHaveLength(user.likes.length);

    // will fail test if text not found
    screen.findByAltText('avatar');

    screen.findByAltText('header');

})
