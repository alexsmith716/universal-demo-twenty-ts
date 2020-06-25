
import React from 'react';
import { render, getAllByTestId, fireEvent } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks'
import LinkTest from './LinkTest';

test('Link changes the class when hovered', () => {

	const { container } = render(
		<LinkTest page='https://github.com/'>Github</LinkTest>
	);

	expect(container).toMatchSnapshot();

	const [element] = getAllByTestId(container, 'hover-anchorlink');

	fireEvent.mouseEnter(element)

	expect(container).toMatchSnapshot();

	fireEvent.mouseLeave(element)

	expect(container).toMatchSnapshot();

});
