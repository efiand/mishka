import { getImages, punctify } from '../common/utils.js';

export default ({ bonusText, project }) => ({
	description: `${punctify(project)} ${bonusText}`,
	pageHeading: {
		imageSet: getImages({ file: 'main-header.jpg', height: 746, width: 1150 }),
		promoLinks: [
			{ icon: 'interior', title: 'Предметы интерьера', url: '#!' },
			{ icon: 'toys', title: 'Детские игрушки', url: '#!' }
		],
		title: 'Милые штуки ручной работы для дома'
	},
	weekGood: {
		description: 'Экологически чистая пряжа, ручная работа. Доступны в шести расцветках и трёх размерах.',
		details: [
			{ key: 'Цвет', value: 'тиффани/серый' },
			{ key: 'Диаметр', value: '25 см' },
			{ key: 'Высота', value: '15 см' }
		],
		imageSet: getImages({ alt: 'Набор вязаных корзинок.', file: 'baskets.jpg', height: 636, width: 525 }),
		label: 'Товар недели',
		link: {
			title: 'Заказать',
			url: '#!'
		},
		price: 'Цена: 990 руб.',
		title: 'Вязаные корзинки'
	}
});
