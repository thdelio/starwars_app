import { ArgsProps } from 'antd/es/notification/interface';
import { notification } from 'antd/lib';

export const showNotification = (data: ArgsProps) => {
	switch (data?.type) {
		case 'success':
			data.style = { backgroundColor: '#f6ffed', border: '1px solid #b7eb8f' };
			break;
		case 'info':
			data.style = { backgroundColor: '#e6f7ff', border: '1px solid #91d5ff' };
			break;
		case 'warning':
			data.style = {
				backgroundColor: '#fffbe6',
				border: '1px solid #ffe58f',
			};
			break;
		case 'error':
			data.style = {
				backgroundColor: '#fff2f0',
				border: '1px solid #ffccc7',
			};
			break;

		default:
			return false;
	}

	notification[data?.type](data);
};
