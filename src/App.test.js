import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders App with className app', () => {
  const wrapper = shallow(<App />);
  const found = wrapper.find('.app');

  expect(found.length).toEqual(1)
});

it('initial state starts with an empty array', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.state()).toEqual({thoughts: []})
});

it('having 2 thoughts in state should mean there are two thoughtCards', () => {
  const wrapper = mount(<App />);
  const mockedData = [{title: 'abc', body: 'def'}, {title: 'ghi', body: 'jkl'}]

  wrapper.setState({
    thoughts: mockedData
  })

  const findCards = wrapper.find('.thoughtCard');

  expect(wrapper.state().thoughts).toEqual(mockedData);
  expect(findCards.length).toEqual(2);

});

it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
  const wrapper = mount(<App />);
  const titleInput = wrapper.find('input').first();
  const bodyInput = wrapper.find('input').last();
  const button = wrapper.find('button');
  const expectedState = { thoughts: [{title: 'My Thought', body: 'buy food', id: 0}]}
  const mockedSubmit = jest.fn();

  titleInput.simulate('change', {target: {value: 'My Thought'}});
  bodyInput.simulate('change', {target: {value: 'buy food'}});
  button.simulate('click');

  expect(wrapper.state()).toEqual(expectedState);
  expect(wrapper.find('.thoughtCard').length).toEqual(1)
});
