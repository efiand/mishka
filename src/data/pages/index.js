import { punctify } from '../scripts/common/utils.js';

export default ({ bonusText, project }) => ({
	description: `${punctify(project)} ${bonusText}`
});
