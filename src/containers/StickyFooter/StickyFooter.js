import React from 'react';
import { Helmet } from 'react-helmet-async';

import GraphiQLExample from '../../components/GraphiQLExample';
// import LinkTest from '../../components/jestTest/LinkTest';

const StickyFooter = () => {

	const styles = require('./scss/StickyFooter.scss');

	return (

		<div className="container">

			<Helmet title="Sticky Footer" />

			<h1 className={styles.uniqueColor}>Sticky Footer Test!</h1>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>

			{/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

			<div className="row">

				{/* <LinkTest page='https://github.com/graphql' children='Mouse Over Me!'/> */}

			</div>

			<div className="row">

				<GraphiQLExample />

			</div>

			{/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

		</div>
	);
}

export default StickyFooter;
