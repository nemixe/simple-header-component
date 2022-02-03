import { act, renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import { useAtom } from 'jotai';
import { userAtom } from '../state';
import Header from './Header';

test('renders react login button', () => {
  const {result} = renderHook(() => useAtom(userAtom));
  const [, setUser] = result.current

  act(() => {
    setUser(null);
  })
  
  render(<Header />);
  const linkElement = screen.getByTestId(/login-button/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders react logout button', () => {
  const {result} = renderHook(() => useAtom(userAtom));
  const [, setUser] = result.current

  act(() => {
    setUser({
      name: 'John doe',
      email: 'johndoe@gmail.com',
    });
  })

  render(<Header />);
  const linkElement = screen.getByTestId(/logout-button/i);
  expect(linkElement).toBeInTheDocument();
});
