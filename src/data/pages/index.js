import { getImages, punctify } from '../common/utils.js';

export default ({ bonusText, project }) => ({
	advantages: {
		heading: 'Коротко о нас:',
		list: [
			{ icon: 'eco', text: 'Экологически чистые материалы' },
			{ icon: 'handmade', text: 'Связано вручную с любовью и умилением' },
			{ icon: 'banknote', text: 'Скандинавский стиль по российской цене' },
			{ icon: 'rocket', text: 'Поддержка отечественного производителя' },
			{ icon: 'heart', text: 'Увеличивает лайки на фотографиях' },
			{ icon: 'gift', text: 'Поставляется в подарочной упаковке' }
		]
	},
	contacts: {
		details: [
			{ key: 'e-mail', value: '<a href="mailto:info@mimimishkashop.ru">info@mimimishkashop.ru</a>' },
			{ key: 'адрес', value: 'г. Санкт-Петербургул. Большая Конюшеннаяд. 19/8, офис 101' }
		],
		heading: 'Контакты',
		link: {
			title: 'Напишите нам',
			url: '#!'
		},
		mapSet: getImages('map.jpg', { alt: 'Наш адрес на карте' })
	},
	description: `${punctify(project)} ${bonusText}`,
	pageHeading: {
		backgroundSet: getImages('main-header.jpg'),
		promoLinks: [
			{ icon: 'interior', title: 'Предметы интерьера', url: '#!' },
			{ icon: 'lego', title: 'Детские игрушки', url: '#!' }
		],
		title: 'Милые штуки ручной работы для дома'
	},
	reviews: {
		backgroundSet: getImages('bg-reviews.jpg'),
		controls: [
			{
				alias: 'prev',
				title: 'К предыдущему отзыву'
			},
			{
				alias: 'next',
				title: 'К следующему отзыву'
			}
		],
		heading: 'Отзывы',
		link: {
			title: 'Написать',
			url: '#!'
		},
		list: [
			{
				author: 'Анастасия Красильникова',
				authorLink: {
					title: '@misssssiskras',
					url: '#!'
				},
				text: 'Я молодая мама, но всё равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке, и мои фотографии сразу стали более стильными, а также набирают больше лайков!'
			},
			{
				author: 'Аcя Синельникова',
				authorLink: {
					title: '@misssssissin',
					url: '#!'
				},
				text: 'Я немолодая мама, и фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке, и мои фотографии стали стильными, а также набирают лайков!'
			}
		]
	},
	weekGood: {
		description: 'Экологически чистая пряжа, ручная работа. Доступны в шести расцветках и трёх размерах.',
		details: [
			{ key: 'Цвет', value: 'тиффани/серый' },
			{ key: 'Диаметр', value: '25 см' },
			{ key: 'Высота', value: '15 см' }
		],
		heading: 'Вязаные корзинки',
		imageSet: getImages('baskets.jpg', { alt: 'Набор вязаных корзинок.' }),
		label: 'Товар недели',
		link: {
			title: 'Заказать',
			url: '#!'
		},
		price: 'Цена: 990 руб.'
	}
});
