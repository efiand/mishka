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

export default ({ bonusText, project, slogan }) => ({
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
		mapSet: {
			alt: 'Наш адрес на карте',
			filename: 'map',
			height: 457,
			width: 768
		}
	},
	description: `${punctify(project)} ${bonusText}`,
	pageHeading: {
		backgroundSet: {
			filename: 'main-header'
		},
		promoLinks: [
			{ icon: 'interior', title: 'Предметы интерьера', url: '#!' },
			{ icon: 'lego', title: 'Детские игрушки', url: '#!' }
		],
		title: slogan
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
	weekGood
});