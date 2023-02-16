import { Form } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { ICharacter, IRespond } from '../../utils/interfaces';
import CustomRow from '../antDesing/CustomRow';
import FilmSelect from './FilmSelect';
import Pagination from './Pagination';
import ShowCharacter from './ShowCharacter';

interface IProps {
	people: IRespond;
	setPeople: Dispatch<SetStateAction<IRespond>>;
	characters: ICharacter[];
	setCharacters: Dispatch<SetStateAction<ICharacter[]>>;
	getAllPeople: () => void;
}

const MainPage: FC<IProps> = ({
	people,
	setPeople,
	characters,
	setCharacters,
	getAllPeople,
}): React.ReactElement => {
	return (
		<Form>
			<FilmSelect
				setCharacters={setCharacters}
				setPeople={setPeople}
				getAllPeople={getAllPeople}
			/>

			{characters?.length && (
				<CustomRow justify={'center'}>
					<Title level={2} id='text'>
						Characters
					</Title>
				</CustomRow>
			)}

			<CustomRow justify={'center'} style={{ paddingTop: 25 }}>
				<ShowCharacter characters={characters} />
			</CustomRow>

			<CustomRow justify={'center'} style={{ paddingTop: 25 }}>
				<Pagination
					people={people}
					setPeople={setPeople}
					setCharacters={setCharacters}
				/>
			</CustomRow>
		</Form>
	);
};

export default MainPage;
