export default class PageHeader {
	constructor({ target }) {
		this._headerElement = target;
		this._togglerElement = this._headerElement.querySelector('.PageHeader__toggler');

		this._togglerElement.addEventListener('click', this._toggleHandler.bind(this));

		this._headerElement.classList.remove('PageHeader_noJs');
	}

	_toggleHandler() {
		this._headerElement.classList.toggle('PageHeader_open');
	}
}
