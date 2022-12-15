export default class Reviews {
	constructor({ target }) {
		this._reviewsElement = target;
		this._sliderElement = this._reviewsElement.querySelector('.Reviews__slider');
		this._slideElements = Array.from(this._sliderElement.querySelectorAll('.Reviews__item'));
		this._pageElement = document.querySelector('.Page');

		if (this._slideElements.length <= 1) {
			return;
		}

		this._linkElements = this._sliderElement.querySelectorAll('a');
		this._index = 0;
		this._prevElement = this._reviewsElement.querySelector('.Reviews__control_prev');
		this._nextElement = this._reviewsElement.querySelector('.Reviews__control_next');

		this._prevElement.addEventListener('click', () => this._handleSlide(-1));
		this._nextElement.addEventListener('click', () => this._handleSlide(1));
		this._linkElements.forEach((linkElement) => {
			linkElement.addEventListener('focus', (event) => {
				const parentElement = event.currentTarget.closest('.Reviews__item');
				this._index = this._slideElements.findIndex((slideElement) => slideElement === parentElement);

				this._setOffset();
			});
		});
		window.addEventListener('resize', () => this._setSlideWidth());

		this._setSlideWidth();
		this._reviewsElement.classList.remove('Reviews_noJs');
	}

	_handleSlide(diff) {
		this._index = (this._index + diff + this._slideElements.length) % this._slideElements.length;
		this._setOffset();
	}

	_setOffset() {
		this._reviewsElement.style.setProperty('--translate', `${-this._index * 100}%`);
	}

	_setSlideWidth() {
		const { paddingRight, paddingLeft } = getComputedStyle(this._reviewsElement);
		const slideWidth = this._pageElement.clientWidth - parseInt(paddingLeft, 10) - parseInt(paddingRight, 10);

		this._reviewsElement.style.setProperty('--width', `${slideWidth}px`);
	}
}
