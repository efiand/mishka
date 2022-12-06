import { Breakpoint } from '../scripts/common/constants.js';
import { getImages } from './common/utils.js';

export default () => ({
	Breakpoint,
	bonusText: 'Бесплатная доставка по России',
	devData: {
		logo: getImages('logo-htmlacademy.svg', { alt: 'Логотип HTML Academy', height: 35, width: 27 }),
		text: 'Разработано',
		url: 'https://htmlacademy.ru/intensive/adaptive'
	},
	logo: getImages('logo-mishka.svg', { adaptive: true, alt: 'Логотип компании' }),
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
	project: 'Mishka',
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
