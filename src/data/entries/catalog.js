import { mapGood, punctify } from '../utils.js';

const title = 'Каталог товаров';

export default ({ project, slogan }) => ({
	description: `${punctify(project)} ${slogan}`,
	goods: {
		heading: 'Товары',
		list: [
			{
				details: [
					{ key: 'Рост', value: '30 см' },
					{ key: 'Вес', value: '200 г' }
				],
				heading: 'Зайчик-попрыгайчик',
				price: '1200 руб.'
			},
			{
				details: [
					{ key: 'Диаметр', value: '15 см' },
					{ key: 'Высота', value: '10 см' }
				],
				heading: 'Корзинка для белья',
				price: '690 руб.'
			},
			{
				details: [
					{ key: 'Диаметр', value: '30 см' },
					{ key: 'Высота', value: '30 см' }
				],
				heading: 'Большая корзинка для игрушек',
				price: '1500 руб.'
			}
		].map(mapGood(true))
	},
	pageHeading: {
		title
	},
	process: {
		heading: 'Процесс производства',
		icon: 'video',
		link: {
			title: 'Сделать заказ',
			url: 'order.html'
		},
		text: 'По просьбам наших любимых фолловеров мы сняли для вас подробное видео о том, как появляются наши товары.',
		video: {
			poster: 'images/poster.jpg',
			src: '#!'
		}
	},
	title
});
