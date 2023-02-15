import React from 'react';
import { Descriptions } from 'antd';
import { DescriptionsProps } from 'antd/lib';

const CustomDescriptions: React.FunctionComponent<DescriptionsProps> = ({
	...props
}): React.ReactElement => (
	<Descriptions {...props}>{props.children}</Descriptions>
);

export default CustomDescriptions;
