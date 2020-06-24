
import React from 'react';
import { act, render } from '@testing-library/react';

import LinkTest from './LinkTest';


test('Link changes the class when hovered', () => {

	const component = renderer.create(
		<LinkTest page='https://github.com/'>Github</LinkTest>,
	);

	let tree = component.toJSON();

	expect(tree).toMatchSnapshot();

	// manually trigger the callback
	tree.props.onMouseEnter();

	// re-rendering
	tree = component.toJSON();

	expect(tree).toMatchSnapshot();

	// manually trigger the callback
	tree.props.onMouseLeave();

	// re-rendering
	tree = component.toJSON();

	expect(tree).toMatchSnapshot();

});
