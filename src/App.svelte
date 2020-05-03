<script>
	import skills from './daiki.json';

	let data = skills.jutsus;

	import * as JsSearch from 'js-search';
	const search = new JsSearch.Search('id');
	search.addIndex('name');
	search.addIndex('desc');
	search.addDocuments(data);

	let searchValue = '';

	const searchSkill = () => {

		if (searchValue.length === 0) {
			return data = skills.jutsus;
		}

		const skillsLoop = search.search(searchValue);

		return data = skillsLoop;

	};
</script>

<style type="text/scss">
	$bg: #ccc;

	:global(body) {
		background-color: $bg;
	}

	.skill-item {
		margin-bottom: 30px;
		background-color: #a4a29e;
		padding: 20px;
    border-radius: 30px;
	}

	.skill-stats {
		margin: 15px 0;
		padding: 0;
		font-style: italic;
	}

	.skill-stats li {
		display: inline;
	}

	.skill-stats li ~ li {
		margin-left: 10px;
	}

	.skill-desc {
		margin-bottom: 15px;
	}

	.skill-bonus {
		padding-left: 15px;
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
		{#each data as jutsu, i}
				<div class="skill-item">
						<h2 class="skill-name">{jutsu.name}</h2>
						<ul class="skill-stats">
							{#each data[i].stats as stat}
							<li><small> <strong>{stat.name}:</strong> {stat.desc}</small></li>
							{/each}
						</ul>
						<p class="skill-desc">{@html jutsu.desc}</p>
						<ul class="skill-bonus">
							{#each jutsu.bonus as bonus, i}
								<li>
									<strong>{Object.keys(bonus)}</strong> - {Object.values(bonus)}
								</li>
							{/each}
						</ul>
				</div>
		{/each}
	</div>

</div>
