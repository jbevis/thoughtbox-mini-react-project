import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const mockedData = [{title: 'abc', body: 'def'}]
    const wrapper = shallow(<ThoughtCard thought={mockedData}/>);
    const found = wrapper.find('.thoughtCard');

    expect(found.length).toEqual(1)
  });

  it('has a title and body', () => {
    const mockedData = [{title: 'abc', body: 'def'}]
    const wrapper = shallow(<ThoughtCard thought={mockedData}/>);
    const title = wrapper.find('.title')
    const body = wrapper.find('.body')

    expect(title.length).toEqual(1)
    expect(body.length).toEqual(1)
  });

});
