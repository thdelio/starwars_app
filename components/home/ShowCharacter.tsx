import Link from 'next/link';
import React, { FC } from 'react';
import { ICharacter } from '../../utils/interfaces';
import CustomCard from '../antDesing/CustomCard';
import CustomCol from '../antDesing/CustomCol';
import CustomDescriptions from '../antDesing/CustomDescriptions';
import CustomDescriptionsItem from '../antDesing/CustomDescriptionsItem';
import CustomRow from '../antDesing/CustomRow';
import { MoreOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import ShowCustomMessage from '../Messages/ShowCustomMessage';

interface IProps {
	characters: ICharacter[];
}
const ShowCharacter: FC<IProps> = ({ characters }) => {
	return (
		<Spin spinning={!characters}>
			{characters?.length === 0 ? (
				<ShowCustomMessage notResult plural />
			) : (
				<CustomRow gutter={24} justify='start'>
					{characters?.map((character, index) => (
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
									<Link href={`/Character/${character.name}`} key='details'>
										More details
										<MoreOutlined />
									</Link>,
								]}
							>
								<CustomDescriptions>
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
			)}
		</Spin>
	);
};
export default ShowCharacter;
