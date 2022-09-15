import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { TableBody } from '@mui/material';

test('Renders the page', () => {
  const { getByText } = render(<App />);
  const rickAndMortyIpsumFragment = getByText(/I'd like to order one large phone with extra phones please./i);
  expect(rickAndMortyIpsumFragment).toBeInTheDocument();
});

test('Click on gthe characters button renders the characters page', async () => {
  async function cardInTheDocument(filter) {
    const card = await findByText(filter);
    expect(card).toBeInTheDocument();
  }

  const { getByText, findByText } = render(<App />);
  const charactersButton = getByText(/characters/i);

  await userEvent.click(charactersButton);

  cardInTheDocument(/Rick Sanchez/i);
  cardInTheDocument(/Ants in my Eyes Johnson/i)

});

test('Clicking on a character card shows more information.', async () => {
  const root = document.createElement('div');
  root.id = "root";
  render(<App />, {
    container: root,
    baseElement: document.body
  });
  document.body.appendChild(root);
  const charactersButton = screen.getByText(/characters/i);

  await userEvent.click(charactersButton);


  const img = await screen.findByAltText(/Rick Sanchez/i);

  await userEvent.click(img);
  const modal = await screen.findByText(/gender/i);

  expect(modal).toBeInTheDocument();

});



test('Click on gthe locations button renders the characters page', async () => {
  async function cardInTheDocument(filter) {
    const card = await findByText(filter);
    expect(card).toBeInTheDocument();
  }

  const { getByText, findByText } = render(<App />);
  const charactersButton = getByText(/locations/i);

  await userEvent.click(charactersButton);

  cardInTheDocument(/Earth (C-137)/i);
  cardInTheDocument(/Earth (Replacement Dimension)/i)

});

test('Clicking on a location card shows more information.', async () => {
  const root = document.createElement('div');
  root.id = "root";
  render(<App />, {
    container: root,
    baseElement: document.body
  });
  document.body.appendChild(root);
  const charactersButton = screen.getByText(/characters/i);

  await userEvent.click(charactersButton);


  const text = await screen.findByText(/Earth (C-137)/i);

  await userEvent.click(text);
  const modal = await screen.findByText(/dimension/i);

  expect(modal).toBeInTheDocument();

});