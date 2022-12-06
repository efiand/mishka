import { Breakpoint } from '../scripts/common/constants.js';
import { getImages } from './common/utils.js';

export default () => ({
	Breakpoint,
	bonusText: 'Бесплатная доставка по России',
	logo: getImages({ alt: 'Логотип компании', file: 'logo-mishka.svg' }),
	navigation: [
		{
			alias: 'main',
			list: [
				{
					title: 'Каталог товаров',
					url: 'catalog.html'
				},
				{
					title: 'Вязание на заказ',
					url: 'order.html'
				}
			]
		},
		{
			alias: 'services',
			list: [
				{
					icon: 'search',
					title: 'Поиск по сайту',
					url: '#!'
				},
				{
					icon: 'cart',
					title: 'Корзина: пока пуста',
					url: '#!'
				}
			]
		},
		{
			alias: 'additions',
			list: [
				{
					title: 'Новые поступления',
					url: '#!'
				},
				{
					title: 'Распродажа',
					url: '#!'
				}
			]
		}
	],
	project: 'Mishka'
});
