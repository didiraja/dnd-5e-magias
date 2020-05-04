<script>
	import { skills } from './daiki.js';
	import * as JsSearch from 'js-search';
	import SkillCard from './components/SkillCard.svelte';

	// JSON to state
	let raceSkills = skills.race;
	let classSkills = skills.class;
	let talentSkills = skills.talents;
	let jutsuSkills = skills.jutsus;

	// Search Modules
	const search = new JsSearch.Search('id');
	search.addIndex('name');
	search.addIndex('desc');
	search.addDocuments(raceSkills);
	search.addDocuments(classSkills);
	search.addDocuments(talentSkills);
	search.addDocuments(jutsuSkills);

	let searchValue = '';

	const searchSkill = () => {
		
		if (searchValue.length === 0) {
			raceSkills = skills.race;
			classSkills = skills.class;
			talentSkills = skills.talents;
			jutsuSkills = skills.jutsus;
		}

		if (searchValue.length >= 2) {
			raceSkills = search.search(searchValue);
		}

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

			<SkillCard data={raceSkills} />	
			<SkillCard data={classSkills} />
			<SkillCard data={talentSkills} />
			<SkillCard data={jutsuSkills} />

	</div>

</div>
