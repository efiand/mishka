<script context="module">
	import Checker from '../Checker/Checker.svelte';
	import Field from '../Field/Field.svelte';
</script>

<script>
	export let action = null,
		append = null,
		method = 'get',
		prepend = null,
		sets = [],
		submitText = 'OK';
</script>

<form class="Form" {action} {method}>
	{#if prepend}
		<p class="Form__prepend">{@html prepend}</p>
	{/if}

	{#each sets as { checkers = [], fields = [], title }}
		<fieldset class="Form__set">
			<legend class="Form__title">{title}</legend>

			{#if checkers.length}
				<ul class="Form__checkers">
					{#each checkers as checker}
						<li class="Form__checker">
							<Checker {...checker} />
						</li>
					{/each}
				</ul>
			{/if}

			{#each fields as field}
				<p class="Form__field">
					<Field {...field} />
				</p>
			{/each}
		</fieldset>
	{/each}

	<footer class="Form__footer">
		{#if append}
			<p class="Form__append">{@html append}</p>
		{/if}

		<button class="Form__submit Button" type="submit">{submitText}</button>
	</footer>
</form>
