import { Breakpoint } from '../scripts/constants.js';

export default () => ({
	Breakpoint,
	action: 'https://echo.htmlacademy.ru',
	alterLogo: {
		height: 34,
		image: 'logo-mishka-simple.svg#logo',
		title: 'На главную страницу',
		width: 102
	},
	bonusText: 'Бесплатная доставка по России',
	devData: {
		logo: {
			height: 35,
			image: 'logo-htmlacademy.svg#logo',
			width: 27
		},
		text: 'Разработано',
		title: 'На страницу разработчика',
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
					url: 'modal.html'
				},
				{
					title: 'Распродажа',
					url: '#!'
				}
			]
		}
	],
	orderForm: {
		checked: 1,
		heading: 'Добавить в&nbsp;корзину',
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
	],
	togglerText: {
		close: 'Закрыть меню',
		open: 'Открыть меню'
	}
});
