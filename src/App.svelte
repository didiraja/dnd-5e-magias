<script>
	import { skills } from './daiki.js';
	import * as JsSearch from 'js-search';
	import SkillCard from './components/SkillCard.svelte';

	// JSON to state
	let data = skills;

	// Search Modules
	const search = new JsSearch.Search('id');
	search.addIndex('name');
	search.addIndex('desc');
	search.addDocuments(data);

	let searchValue = '';

	const searchSkill = () => {
		
		// if (searchValue.length === 0) {
			// 	return data = skills;
		// }

		const skillsLoop = search.search(searchValue);

		// return data = skillsLoop;

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

			<SkillCard data={data.race} />	
			<SkillCard data={data.class} />
			<SkillCard data={data.talents} />
			<SkillCard data={data.jutsus} />

	</div>

</div>
