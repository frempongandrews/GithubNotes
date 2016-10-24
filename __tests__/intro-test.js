
import 'react-native';
import React from 'react';
import Intro from '../Intro';
import Main from '../Components/Main'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Intro />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});