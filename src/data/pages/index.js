import { getImages, punctify } from '../common/utils.js';

export default ({ bonusText, project }) => ({
	description: `${punctify(project)} ${bonusText}`,
	pageHeading: {
		imageSet: getImages({ file: 'main-header.jpg', useAdaptive: false }),
		title: 'Милые штуки ручной работы для дома'
	}
});
