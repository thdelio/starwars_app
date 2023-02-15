import Link from 'next/link';
import React, { FC } from 'react';
import { ICharacter } from '../../utils/interfaces';
import CustomCard from '../antDesing/CustomCard';
import CustomCol from '../antDesing/CustomCol';
import CustomDescriptions from '../antDesing/CustomDescriptions';
import CustomDescriptionsItem from '../antDesing/CustomDescriptionsItem';
import CustomRow from '../antDesing/CustomRow';
import { MoreOutlined } from '@ant-design/icons';

interface IProps {
	people: ICharacter[];
}
const ShowCharacter: FC<IProps> = ({ people }) => {
	return (
		<CustomRow gutter={24} justify='start'>
			{people?.map((character, index) => (
				<CustomCol
					xs={24}
					md={12}
					lg={8}
					xl={6}
					xxl={4}
					key={index}
					style={{ paddingTop: 20 }}
				>
					<CustomCard
						title={character.name}
						actions={[
							<Link href={''} key='details'>
								More details
								<MoreOutlined />
							</Link>,
						]}
					>
						<CustomDescriptions title={'Character Info'}>
							<CustomDescriptionsItem label={'gender'}>
								{character.gender}
							</CustomDescriptionsItem>
						</CustomDescriptions>
						<CustomDescriptions>
							<CustomDescriptionsItem label={'skin_color'}>
								{character.skin_color}
							</CustomDescriptionsItem>
						</CustomDescriptions>
					</CustomCard>
				</CustomCol>
			))}
		</CustomRow>
	);
};
export default ShowCharacter;
