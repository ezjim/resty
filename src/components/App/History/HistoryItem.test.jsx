import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe('HistoryItem Component', () => {
  it('renders our history', () => {
    const wrapper = shallow(<HistoryItem
      url="https://chucknorrisneverdies.com"
      method='GET' />);
  });
});
