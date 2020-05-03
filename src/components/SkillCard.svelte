<script>
</script>

<style type="text/scss">
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

{#each $$props.data as skill, i}
  <div class="skill-item">

    <h2 class="skill-name">{skill.name}</h2>
    
    {#if $$props.data[i].stats}
      <ul class="skill-stats">
        {#each $$props.data[i].stats as stat}
          <li><small> <strong>{stat.name}:</strong> {stat.desc}</small></li>
        {/each}
      </ul>		
    {/if}
    
    <p class="skill-desc">{@html skill.desc}</p>
    
    {#if $$props.data[i].bonus}
      <ul class="skill-bonus">
        {#each skill.bonus as bonus, i}
          <li>
            <strong>{Object.keys(bonus)}</strong> - {Object.values(bonus)}
          </li>
        {/each}
      </ul>
    {/if}
    
  </div>
{/each}