import { mapGood, punctify } from '../utils.js';

const GOOD_INDEX = 3;

const weekGood = mapGood(
	{
		description: 'Экологически чистая пряжа, ручная работа. Доступны в шести расцветках и трёх размерах.',
		details: [
			{ key: 'Цвет', value: 'тиффани/серый' },
			{ key: 'Диаметр', value: '25 см' },
			{ key: 'Высота', value: '15 см' }
		],
		heading: 'Вязаные корзинки',
		label: 'Товар недели',
		price: 'Цена: 990 руб.'
	},
	GOOD_INDEX
);
weekGood.imageSet.adaptive = false;

const ADDRESS = 'г. Санкт-Петербург<br>ул. Большая Конюшенная<br>д. 19/8, офис 101';

export default ({ bonusText, pageData, project }) => ({
	advantages: {
		heading: 'Коротко о нас:',
		list: [
			{ icon: 'eco', text: 'Экологически чистые&nbsp;материалы' },
			{ icon: 'banknote', text: 'Скандинавский стиль по&nbsp;российской цене' },
			{ icon: 'heart', text: 'Увеличивает лайки на&nbsp;фотографиях' },
			{ icon: 'handmade', text: 'Связано вручную с&nbsp;любовью&nbsp;и&nbsp;умилением' },
			{ icon: 'rocket', text: 'Поддержка отечественного производителя' },
			{ icon: 'gift', text: 'Поставляется в&nbsp;подарочной&nbsp;упаковке' }
		]
	},
	contacts: {
		details: [
			{ key: 'e-mail', value: '<a href="mailto:info@mimimishkashop.ru">info@mimimishkashop.ru</a>' },
			{ key: 'адрес', value: ADDRESS }
		],
		heading: 'Контакты',
		id: 'map',
		link: {
			title: 'Напишите нам',
			url: '#!'
		},
		mapSet: {
			alt: 'Наш адрес на карте',
			filename: 'map',
			height: 457,
			width: 768
		}
	},
	description: `${punctify(project)} ${bonusText}`,
	pageData: {
		...pageData,
		map: {
			initials: {
				center: [59.9387165, 30.3230474],
				controls: [],
				zoom: 17
			},
			placemark: [
				{
					hintContent: ADDRESS
				},
				{
					iconImageHref: 'images/icons.svg#map-pin',
					iconImageOffset: [-22, -82],
					iconImageSize: [67, 100],
					iconLayout: 'default#image',
					iconShadow: false
				}
			]
		}
	},
	pageHeading: {
		backgroundSet: {
			filename: 'main-header'
		},
		title: 'Милые штуки ручной<br>работы для дома'
	},
	promoLinks: {
		list: [
			{ icon: 'interior', title: 'Предметы<br>интерьера', url: '#!' },
			{ icon: 'lego', title: 'Детские<br>игрушки', url: '#!' }
		],
		title: 'Промо-товары'
	},
	reviews: {
		backgroundSet: {
			filename: 'bg-reviews'
		},
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
				text: 'Я молодая мама, но всё равно фотографии не набирали и близко такого количества лайков, как у&nbsp;популярных инстамамочек. В&nbsp;отчаянии, я накупила аксессуаров и игрушек в Мишке, и&nbsp;мои фотографии сразу стали более стильными, а также набирают больше лайков!'
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
	weekGood
});
