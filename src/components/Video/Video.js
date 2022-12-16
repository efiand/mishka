export default class Video {
	constructor({ target }) {
		this._containerElement = target;
		this._videoElement = this._containerElement.querySelector('.Video__player');
		this._controlElement = this._containerElement.querySelector('.Video__control');

		this._controlElement.addEventListener('click', () => this._play());
		this._videoElement.addEventListener('ended', () => this._deactivate());

		// Инициализация Js-логики
		this._deactivate();
	}

	_play() {
		this._containerElement.classList.add('Video_active');
		this._videoElement.setAttribute('controls', '');
		this._videoElement.play();
	}

	_deactivate() {
		this._containerElement.classList.remove('Video_active');
		this._videoElement.removeAttribute('controls');
	}
}
