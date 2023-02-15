import React from 'react';
import CustomImage from '../antDesing/CustomImage';

import CustomSearch from '../antDesing/CustomSearch';

const NavBar = (): React.ReactElement => {
	return (
		<ul>
			{/* <CustomImage src={'https://i.ibb.co/6rKfJ9R/Logo.webp'} width={60} /> */}
			<CustomSearch />
		</ul>
	);
};

export default NavBar;
