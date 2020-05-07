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
	$bg: #343a42;

	:global(body) {
		background-color: $bg;
	}

	.wrapper {
		width: 95%;
    margin: 0 auto;
    padding-top: 10px;
	}

	.top {
		margin-bottom: 21px;

		input {
			width: 500px;
			height: 50px;
			margin: 0 auto;
			padding: 10px;
			border-radius: 5px;
			display: block;
			font-size: 20px;
		}

		.title {
			font-family: 'Rancho', cursive;
			color: white;
			text-align: center;
			font-size: 80px;
			letter-spacing: 6px;
			margin: 0;
		}

	}
</style>

<div class="wrapper">

	<div class="top">

		<h1 class="title">Skill Lurker</h1>

		<input
			type="text" placeholder="Busque sua habilidade"
			bind:value={searchValue} on:input={searchSkill}
		/>
	</div>

	<div class="main">

			<SkillCard data={data} />

	</div>

</div>
