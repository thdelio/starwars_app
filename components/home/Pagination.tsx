import React, { Dispatch, FC, SetStateAction } from 'react';
import { getApiResults } from '../../utils/APIs';
import { showNotification } from '../../utils/functions';
import { ICharacter, IRespond } from '../../utils/interfaces';
import CustomButton from '../antDesing/CustomButton';
import CustomRow from '../antDesing/CustomRow';
import CustomSpace from '../antDesing/CustomSpace';

interface IProps {
	people: IRespond;
	setPeople: Dispatch<SetStateAction<IRespond>>;
	setCharacters: Dispatch<SetStateAction<ICharacter[]>>;
}

const Pagination: FC<IProps> = ({
	people,
	setCharacters,
	setPeople,
}): React.ReactElement => {
	const getPeople = async (API: string) => {
		const response: IRespond = await getApiResults(API);

		if (response.error) {
			showNotification({
				message: response.error,
				type: 'error',
			});
			return;
		}
		setPeople(response);
		setCharacters(response.results);
	};

	return (
		<CustomRow justify={'center'}>
			<CustomSpace>
				{people?.previous && (
					<CustomButton
						size='large'
						type='primary'
						onClick={async () => await getPeople(people.previous)}
					>
						Back
					</CustomButton>
				)}

				{people?.next && (
					<CustomButton
						size='large'
						type='primary'
						onClick={async () => await getPeople(people.next)}
					>
						Next
					</CustomButton>
				)}
			</CustomSpace>
		</CustomRow>
	);
};

export default Pagination;
