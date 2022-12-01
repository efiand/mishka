import { punctify } from '../scripts/common/utils.js';

const slogan = 'Милые штуки ручной работы для дома';

export default ({ project }) => ({
	description: `${punctify(project)} ${slogan}`,
	slogan
});
