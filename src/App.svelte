<script>
	import { skills } from './daiki.js';
	import * as JsSearch from 'js-search';
	import SkillCard from './components/SkillCard.svelte';

	// JSON to state
	let data = skills;

	// Search Modules
	const searchAll = new JsSearch.Search('id');
	searchAll.addIndex('name');
	searchAll.addIndex('type');
	searchAll.addIndex('desc');
	searchAll.addDocuments(skills);

	let searchValue = '';

	const resetState = () => data = skills;

	const searchSkill = () => {
		
		if (searchValue.length === 0) resetState();

		if (searchValue.length >= 2) data = searchAll.search(searchValue);

	};
</script>

<style type="text/scss">
	$bg: #ccc;

	:global(body) {
		background-color: $bg;
	}
</style>

<div class="wrapper">

	<div class="top">
		<input
			type="text" placeholder="Busque sua habilidade"
			bind:value={searchValue} on:input={searchSkill}
		/>
	</div>

	<div class="main">

			<SkillCard data={data} />

	</div>

</div>
