import { mapGood, punctify } from '../utils.js';

const title = 'Каталог товаров';

export default ({ project, slogan }) => ({
	description: `${punctify(project)} ${slogan}`,
	goods: {
		heading: 'Товары',
		list: [
			{
				details: [
					{ key: 'рост', value: '30 см' },
					{ key: 'вес', value: '200 г' }
				],
				heading: 'Зайчик-попрыгайчик',
				price: '1 200 руб.'
			},
			{
				details: [
					{ key: 'диаметр', value: '15 см' },
					{ key: 'высота', value: '10 см' }
				],
				heading: 'Корзинка для белья',
				price: '690 руб.'
			},
			{
				details: [
					{ key: 'диаметр', value: '30 см' },
					{ key: 'высота', value: '30 см' }
				],
				heading: 'Большая корзинка для игрушек',
				price: '1 500 руб.'
			}
		].map(mapGood)
	},
	pageHeading: {
		title
	},
	process: {
		heading: 'Процесс производства',
		link: {
			title: 'Сделать заказ',
			url: 'order.html'
		},
		text: 'По просьбам наших любимых фолловеров мы сняли для вас подробное видео о том, как появляются наши товары.',
		video: {
			backgroundSet: {
				filename: 'poster'
			},
			file: 'blank',
			poster: 'images/poster.jpg'
		}
	},
	title
});
