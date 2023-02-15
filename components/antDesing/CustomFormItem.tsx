import React from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';

const { Item } = Form;

export type CustomFormItemProps = FormItemProps & {
	onlyLetters?: boolean;
};

const CustomFormItem: React.FunctionComponent<CustomFormItemProps> = ({
	colon = true,
	hasFeedback = false,
	noStyle = false,
	onlyLetters = false,
	trigger = 'onChange',
	validateFirst = false,
	validateTrigger = 'onChange',
	valuePropName = 'value',
	...props
}): React.ReactElement => {
	if (onlyLetters) {
		props.normalize = (value: string) =>
			value.match(new RegExp('^[a-z A-Z]+$'))
				? value
				: value.substring(0, value.length - 1);
	}
	return (
		<Item
			style={{ marginBottom: '5px' }}
			colon={colon}
			hasFeedback={hasFeedback}
			noStyle={noStyle}
			trigger={trigger}
			validateFirst={validateFirst}
			validateTrigger={validateTrigger}
			valuePropName={valuePropName}
			{...props}
		>
			{props.children}
		</Item>
	);
};

export default CustomFormItem;
