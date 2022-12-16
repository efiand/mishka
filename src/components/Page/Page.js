import Form from '../Form/Form.svelte';
import Map from '../Map/Map.js';
import PageHeader from '../PageHeader/PageHeader.js';
import Reviews from '../Reviews/Reviews.js';
import Video from '../Video/Video.js';
import { initApp } from '../../scripts/utils.js';

const apps = {
	Form
};

const setLazyStyles = (lazyStyledElement) => {
	lazyStyledElement.setAttribute('style', lazyStyledElement.dataset.lazyStyle);
	lazyStyledElement.removeAttribute('data-lazy-style');
};

export default class Page {
	constructor({ target, props }) {
		this._pageElement = target;
		this._widgets = props.widgets || [];

		initApp(PageHeader, this._pageElement.querySelector('.PageHeader'));

		// Загрузка скриптов второго и последующих экранов
		if (props.devMode || this._scrolledToContent) {
			this._initLazy();
		} else {
			this._scrollHandler = this._scrollHandler.bind(this);
			this._pageElement.addEventListener('scroll', this._scrollHandler);
		}

		this._pageElement.querySelector('.Page__main').classList.remove('Page__main_noJs');
	}

	get _scrolledToContent() {
		return this._pageElement.scrollTop > window.innerHeight;
	}

	_initLazy() {
		this._pageElement.removeEventListener('scroll', this._scrollHandler);
		this._pageElement.querySelectorAll('[data-lazy-style]').forEach(setLazyStyles);

		this._widgets.forEach(([widget, data = {}]) => {
			if (!apps[widget]) {
				return;
			}

			initApp(apps[widget], this._pageElement.querySelector(`[data-widget="${widget}"]`), data);
		});

		initApp(Map, this._pageElement.querySelector('.Map'), {
			...window.pageData.map,
			pageElement: this._pageElement
		});
		initApp(Reviews, this._pageElement.querySelector('.Reviews'), { pageElement: this._pageElement });
		initApp(Video, this._pageElement.querySelector('.Video'));
	}

	_scrollHandler() {
		if (!this._scrolledToContent) {
			return;
		}

		this._initLazy();
	}
}
