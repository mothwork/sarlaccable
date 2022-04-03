import { render, screen } from '@testing-library/react';
import App from './App';
import Person from '../src/components/Person'

test('Renders NavBar link to GitHub', () => {
  render(<App />);
  const linkElement = screen.getByText(/Created/);
  expect(linkElement).toBeInTheDocument();
});

test('Renders NavBar NavLink to /', () => {
  render(<App />);
  const element = screen.getAllByText(/Sarlaccable/);
  expect(element[0]).toBeInTheDocument();
})

test('Renders button to /main', () => {
  render(<App/>);
  const element = screen.getByText(/Find Out/)
  expect(element).toBeInTheDocument();
})

test('Renders person card', () => {
  const person={
    name: 'Brett Hageft',
    height: 999,
    mass: 999,
    birth: "0BBY"
  }
  render(<Person person={person}></Person>)
})
