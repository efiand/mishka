import { Breakpoint } from '../scripts/common/constants.js';

export default () => ({
	Breakpoint,
	bonusText: 'Бесплатная доставка по России',
	logo: {
		alt: 'Логотип компании.',
		default: 'images/logo-mishka.svg',
		mobile: 'images/logo-mishka-mobile.svg',
		tablet: 'images/logo-mishka-tablet.svg'
	},
	navigation: [
		{
			alias: 'main',
			list: [
				{
					href: 'catalog.html',
					title: 'Каталог товаров'
				},
				{
					href: 'order.html',
					title: 'Вязание на заказ'
				}
			]
		},
		{
			alias: 'services',
			list: [
				{
					href: '#!',
					icon: 'search',
					title: 'Поиск по сайту'
				},
				{
					href: '#!',
					icon: 'cart',
					title: 'Корзина: пока пуста'
				}
			]
		},
		{
			alias: 'additions',
			list: [
				{
					href: '#!',
					title: 'Новые поступления'
				},
				{
					href: '#!',
					title: 'Распродажа'
				}
			]
		}
	],
	project: 'Mishka'
});
