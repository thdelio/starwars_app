import { Form } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import { ICharacter } from '../../utils/interfaces';
import CustomCol from '../antDesing/CustomCol';
import CustomFormItem from '../antDesing/CustomFormItem';
import CustomRow from '../antDesing/CustomRow';
import CustomSelect from '../antDesing/CustomSelect';
import ShowCharacter from './ShowCharacter';

interface IProps {
	people: ICharacter[];
}

const MainPage: FC<IProps> = ({ people }): React.ReactElement => {
	return (
		<Form>
			<CustomRow justify={'center'}>
				<CustomCol xs={24} md={16} lg={12}>
					<CustomFormItem label={<strong className='text'>Movies</strong>}>
						<CustomSelect placeholder='Movies'></CustomSelect>
					</CustomFormItem>
				</CustomCol>
			</CustomRow>
			<CustomRow justify={'center'}>
				<Title level={2} id='text'>
					Characters
				</Title>
			</CustomRow>
			<CustomRow justify={'center'}>
				<ShowCharacter people={people} />
			</CustomRow>
		</Form>
	);
};

export default MainPage;
