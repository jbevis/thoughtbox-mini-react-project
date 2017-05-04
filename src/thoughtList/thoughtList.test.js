import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const mockedData = [{title: 'abc', body: 'def'}, {title: 'ghi', body: 'jkl'}]
    const wrapper = mount(<ThoughtList thoughtList = {mockedData}/>);
    const found = wrapper.find('.thoughtList')

    expect(found.length).toEqual(1)
  });

  it('has multiple ThoughtCard class fields', () => {
    const mockedData = [{title: 'abc', body: 'def'}, {title: 'ghi', body: 'jkl'}]
    const wrapper = mount(<ThoughtList thoughtList = {mockedData}/>);
    const found = wrapper.find('.thoughtCard');

    expect(found.length).toEqual(2);
  });

  it('does not display any cards when no thoughts exist', () => {
    const mockedData = [];
    const wrapper = mount(<ThoughtList thoughtList={mockedData} />);
    const found = wrapper.find('.thoughtCard');

    expect(found.length).toEqual(0)
  })

});
