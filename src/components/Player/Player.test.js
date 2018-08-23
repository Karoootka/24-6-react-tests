import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('render without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player_name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const playerScorePassed = 15;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = Number(playerComponent.find('.Player_score').text());

  expect(playerScoreRendered).toEqual(playerScorePassed);
});
