<script>
	import { skills } from './daiki.js';
	import * as JsSearch from 'js-search';
	import SkillCard from './components/SkillCard.svelte';

	// Search Modules
	const searchAll = new JsSearch.Search('id');
	searchAll.addIndex('name');
	searchAll.addIndex('type');
	searchAll.addIndex('desc');
	searchAll.addDocuments(skills);
	
	// *** CONSTANTS ***

	// JSON to state
	let data = skills;

	const nav = ['Raça','Classe','Talento','Jutsu'];

	let searchValue = '';

	let btnIndex = 4;

	// *** METHODS ***
	function toggleBtn(id) {

		if (btnIndex == id) {
			btnIndex = 4;
			resetState();
			return;
		}

		btnIndex = id;

		let tagFilter;
		switch (nav[id]) {
			case 'Raça':
				tagFilter = 'race';
				break;
			case 'Classe':
				tagFilter = 'class';
				break;
			case 'Talento':
				tagFilter = 'talent';
				break;
			case 'Jutsu':
				tagFilter = 'jutsu';
				break;
		}

		const skillById = skills.filter((item) => item.type == tagFilter);

		data = skillById;

	};

	function resetState() {
		btnIndex = 4;
		return data = skills
	};

	function searchSkill() {
		
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

	.nav {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
		
		button {
			font-weight: 500;
			line-height: 1.75;
			letter-spacing: 0.02857em;
			text-transform: uppercase;
			padding: 5px 15px;
			border-radius: 4px;
			margin-bottom: 0px;

			& ~ button {
				margin-left: 10px;
			}

			/* theme */
			background-color: transparent;
			color: white;
			border: 1px solid rgba(255, 255, 255, 0.23);
			/* theme */

			&:hover {
				cursor: pointer;

				/* theme */
				background-color:	rgba(255, 255, 255, 0.08);
				/* theme */
			}

			&.active {
				background-color: #e0e0e0;
				color: rgba(0, 0, 0, 0.87);
			}

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

	<div class="nav">

		{#each nav as item, index}
			<button
				id={index}
				class:active={btnIndex == index}
				on:click={(event) => toggleBtn(event.target.id)}
			>
				{item}
			</button>
		{/each}
	</div>

	<div class="main">

			<SkillCard data={data} />

	</div>

</div>
