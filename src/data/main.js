import { Breakpoint } from '../scripts/constants.js';

export default () => ({
	Breakpoint,
	action: 'https://echo.htmlacademy.ru',
	bonusText: 'Бесплатная доставка по России',
	devData: {
		logo: {
			alt: 'Логотип HTML Academy',
			ext: 'svg',
			filename: 'logo-htmlacademy',
			height: 35,
			width: 27
		},
		text: 'Разработано',
		url: 'https://htmlacademy.ru/intensive/adaptive'
	},
	logo: {
		adaptive: true,
		alt: 'Логотип компании',
		ext: 'svg',
		filename: 'logo-mishka'
	},
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
	orderForm: {
		heading: 'Добавить в корзину',
		name: 'size',
		submitText: 'Добавить',
		title: 'Выберите размер:',
		values: ['s', 'm', 'l']
	},
	project: 'Mishka',
	slogan: 'Милые штуки ручной работы для дома',
	socials: [
		{
			alias: 'vk',
			title: 'Мы во ВКонтакте',
			url: '#!'
		},
		{
			alias: 'youtube',
			title: 'Мы в Youtube',
			url: '#!'
		},
		{
			alias: 'telegram',
			title: 'Мы в Telegram',
			url: '#!'
		}
	]
});
