<script context="module">
	import { punctify } from '../../scripts/utils.js';
</script>

<script>
	export let area = false,
		bemMix = '',
		name = null,
		pattern = null,
		placeholder = '',
		required = false,
		title = placeholder,
		type = 'text',
		value = null;

	let visuallyHidden = title === placeholder;

	placeholder = `${placeholder}${required ? '*' : ''}`;
</script>

<label class="Field {bemMix}">
	<span class="Field__label" class:visuallyHidden>{punctify(title, [':'])}</span>

	{#if area}
		<textarea class="Field__input Field__input_area" {name} {placeholder} {required}>{value || ''}</textarea>
	{:else}
		<input class="Field__input Field__input_{type}" {type} {name} {value} {placeholder} {pattern} {required} />
	{/if}
</label>
