import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';


it('renders whitout crashing', () => {
  shallow(<App />);
});

it('should update player scor', () => {
  const appComponent = shallow(<App />);

  const players = [{name: 'John', score: 0}];

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[0].score).toEqual(5);

})
