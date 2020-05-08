<style type="text/scss">
  .skill-item {
		margin-bottom: 30px;
    padding: 20px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background-color: #F2F1EF;
	}

	.skill-stats {
    margin: 15px 0;
    padding: 20px 15px;
    font-style: italic;
    background-color: #dbdbdb;
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
    background-color: #fcf2cf;
    padding: 20px 30px;
    
    & li {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }

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