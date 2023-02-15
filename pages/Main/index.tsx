import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomContent from '../../components/antDesing/CustomContent';
import MainPage from '../../components/home/MainPage';
import { getApiResults } from '../../utils/APIs';
import { ICharacter, IPeople } from '../../utils/interfaces';

const Main = (): React.ReactElement => {
	const [people, setPeople] = useState<ICharacter[]>();

	const getPeople = async () => {
		const response: IPeople = await getApiResults(
			'https://swapi.dev/api/people/'
		);

		if (response.error) {
			alert(response.error);
			return;
		}
		setPeople(response.results);
	};

	useEffect(() => {
		getPeople();
	}, []);

	return (
		<CustomContent style={{ padding: 50 }}>
			<MainPage people={people} />
		</CustomContent>
	);
};

export default Main;
