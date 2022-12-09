import { punctify } from '../utils.js';

const title = 'Вязание на заказ';
const slogan = 'Мы будем рады воплотить в жизнь ваши пожелания!';

export default ({ action, project }) => {
	const orderData = {
		action,
		append: '*Поля обязательны для заполнения',
		prepend: `${slogan} Заполните простую форму заказа и мы свяжемся с вами, чтобы уточнить детали.`,
		sets: [
			{
				checkers: [
					{
						checked: true,
						title: 'Аксессуар для интерьера',
						value: 'accessory'
					},
					{
						title: 'Детская игрушка',
						value: 'toy'
					}
				].map((checker) => ({
					...checker,
					name: 'type',
					type: 'radio'
				})),
				title: 'Тип'
			},
			{
				checkers: [
					{
						checked: true,
						title: 'Белый',
						value: 'white'
					},
					{
						checked: true,
						title: 'Серый',
						value: 'grey'
					},
					{
						title: 'Тиффани',
						value: 'tiffany'
					},
					{
						title: 'Черный',
						value: 'black'
					},
					{
						title: 'Розовый',
						value: 'pink'
					},
					{
						title: 'Оранжевый',
						value: 'orange'
					}
				].map((checker) => ({
					...checker,
					name: 'color',
					type: 'checkbox'
				})),
				title: 'Цвет'
			},
			{
				fields: [
					{
						name: 'first_name',
						placeholder: 'Введите ваше имя',
						required: true,
						title: 'Имя'
					},
					{
						name: 'last_name',
						placeholder: 'Укажите фамилию',
						required: true,
						title: 'Фамилия'
					},
					{
						name: 'middle_name',
						placeholder: 'Отчество, если желаете',
						title: 'Отчество'
					}
				].map((field) => ({
					...field,
					pattern: '^[A-Za-zА-Яа-яЁё\\- ]+$'
				})),
				title: 'ФИО'
			},
			{
				fields: [
					{
						name: 'tel',
						pattern: '^\\+?\\d{7,13}$',
						placeholder: '+7 ХХХ ХХХ ХХ ХХ',
						required: true,
						type: 'tel'
					}
				],
				title: 'Тел'
			},
			{
				fields: [
					{
						name: 'email',
						placeholder: 'Ваш Email',
						required: true,
						type: 'email'
					}
				],
				title: 'E-mail'
			},
			{
				fields: [
					{
						area: true,
						name: 'message',
						placeholder: 'Опишите все ваши пожелания к заказу'
					}
				],
				title: 'Доп'
			}
		],
		ssrOnly: true,
		submitText: 'Отправить заказ'
	};

	return {
		description: `${punctify(project)} ${slogan}`,
		pageHeading: {
			title
		},
		title,
		widgets: [['Form', orderData]]
	};
};
