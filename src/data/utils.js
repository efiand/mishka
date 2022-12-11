export { punctify } from '../scripts/utils.js';

export const mapGood = (good, i) => {
	const id = i + 1;

	return {
		...good,
		id,
		imageSet: {
			adaptive: true,
			alt: `Изображение товара «${good.heading}»`,
			filename: `good-${id}`
		},
		link: {
			title: 'Заказать',
			url: '#!'
		}
	};
};
