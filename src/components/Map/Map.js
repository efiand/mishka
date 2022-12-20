let loaded = false;

export default class Map {
	constructor({ props, target }) {
		this._mapElement = target;
		this._data = props;

		this._setMapWidth = this._setMapWidth.bind(this);
		this._load();
	}

	_load() {
		if (loaded) {
			this._loadMap();
			return;
		}

		const scriptElement = document.createElement('script');

		scriptElement.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
		scriptElement.addEventListener('load', () => {
			if (typeof ymaps !== 'undefined') {
				this._loadMap();
				loaded = true;
			}
		});
		document.body.append(scriptElement);
	}

	_loadMap() {
		ymaps.ready(() => {
			const { id } = this._mapElement;
			const map = new ymaps.Map(id, this._data.initials);
			const [hints, placemark] = this._data.placemark;

			const balloonElements = this._data.pageElement.querySelectorAll(`[data-balloon="${id}"]`);
			const balloonContent = Array.from(balloonElements)
				.map(({ innerHTML }) => `<div>${innerHTML}</div>`)
				.join('');
			if (balloonContent) {
				hints.balloonContentBody = balloonContent;
			}

			map.geoObjects.add(new ymaps.Placemark(map.getCenter(), hints, placemark));
			map.behaviors.disable('scrollZoom');

			const ymapsElements = this._mapElement.querySelectorAll('ymaps[class$="-map"]');
			window.addEventListener('resize', () => {
				ymapsElements.forEach(this._setMapWidth);
			});

			this._mapElement.classList.add('Map_ready');
		});
	}

	_setMapWidth(ymapElement) {
		ymapElement.style.width = `${this._data.pageElement.clientWidth}px`;
	}
}
