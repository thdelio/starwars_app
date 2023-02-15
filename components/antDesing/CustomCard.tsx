import React from 'react';
import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';

const CustomCard: React.FunctionComponent<CardProps> = ({
	...props
}): React.ReactElement => <Card {...props}>{props.children}</Card>;

export default CustomCard;
