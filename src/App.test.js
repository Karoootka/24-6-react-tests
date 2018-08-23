import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


it('renders whitout crashing', () => {
  shallow(<App />);
});
