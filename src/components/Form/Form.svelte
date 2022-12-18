<script context="module">
	import Checker from '../Checker/Checker.svelte';
	import Field from '../Field/Field.svelte';

	const getModifier = (checkers = [], fields = []) => {
		if (fields.length > 0) {
			if (fields[0].area) {
				return 'Form__set_area';
			}

			return `Form__set_fields ${fields.length === 1 ? 'Form__set_one' : ''}`;
		}

		if (checkers.length > 0) {
			const [{ type = 'checkbox' }] = checkers;
			return `Form__set_${type}`;
		}

		return '';
	};
</script>

<script>
	export let action = null,
		append = null,
		bemMix = '',
		method = 'get',
		prepend = null,
		sets = [],
		submitText = 'OK';
</script>

<form class="Form {bemMix}" {action} {method}>
	{#if prepend}
		<p class="Form__prepend">{@html prepend}</p>
	{/if}

	{#each sets as { checkers = [], fields = [], title }}
		{@const modifier = getModifier(checkers, fields)}

		<fieldset class="Form__set {modifier}">
			<legend class="Form__title">{title}</legend>

			{#if checkers.length}
				<ul class="Form__checkers">
					{#each checkers as checker}
						<li class="Form__checkerItem">
							<Checker {...checker} bemMix="Form__checker" />
						</li>
					{/each}
				</ul>
			{/if}

			{#if fields.length}
				<div class="Form__fields" class:Form__fields_multi={fields.length > 1}>
					{#each fields as field}
						<p class="Form__fieldItem">
							<Field {...field} />
						</p>
					{/each}
				</div>
			{/if}
		</fieldset>
	{/each}

	<footer class="Form__footer">
		{#if append}
			<p class="Form__append">{@html append}</p>
		{/if}

		<button class="Form__submit Button Button_compact" type="submit">{submitText}</button>
	</footer>
</form>
