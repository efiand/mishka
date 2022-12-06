import { punctify } from '../common/utils.js';

const title = 'Вязание на заказ';
const slogan = 'Мы будем рады воплотить в жизнь ваши пожелания!';

export default ({ project }) => ({
	description: `${punctify(project)} ${slogan}`,
	form: {
		prepend: `${slogan} Заполните простую форму заказа и мы свяжемся с вами, чтобы уточнить детали.`
	},
	pageHeading: {
		title
	},
	title
});
