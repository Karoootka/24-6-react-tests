import React from 'react';
import { shallow } from 'enzyme';
import PlayersList from './PlayersList';
import Player from '../Player/Player';

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
});


it('renders correct number of players', () => {
  const players = [{name: 'Anna', score: 5}, {name: 'Jan', score: 0}];
  const playerComponent = shallow(<PlayersList players={players} />);

  const expectedPlayersNumber = playerComponent.find(Player).length;
  expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate with 10 on when first Player score is changed', () => {
  const players = [{name: 'Anna', score: 5}, {name: 'Jan', score: 0}];

  const mockedOnScoreUpdate = jest.fn();
  const playerCopomnent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  const firstPlayer = playerCopomnent.find(Player).first();
  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  onPlayerScoreChange(10);

  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});

it('renders correct number of players', () => {
  const players = [{name: 'Anna', score: 5}, {name: 'Jan', score: 0}];
  const playerComponent = shallow(<PlayersList players={players} />);

  const expectedPlayersNumber = playerComponent.find(Player).length;
  expect(expectedPlayersNumber).toEqual(2);
});

it('should call onPlayerRemove when remove button is clicked', () => {
  const players = [{name: 'Anna', score: 5}, {name: 'Jan', score: 0}];

  const mockedOnPlayerRemove = jest.fn();
  const playerCopomnent = shallow(<PlayersList players={players} onPlayerRemove={mockedOnPlayerRemove} />);
  const firstPlayer = playerCopomnent.find(Player).first();
  const onPlayerRemove = firstPlayer.prop('onPlayerRemove');
  onPlayerRemove();

  expect(mockedOnPlayerRemove).toBeCalled();
});
