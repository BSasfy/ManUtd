<script>
import getData from '../getData.js'
    const clubData = getData();
  
</script>

{#await clubData}
<h1>Welcome!</h1>
{:then clubData}
<h1>Welcome to {clubData.TeamName}</h1>
{#each clubData.Records as record, index}
    <table>
        <tr>
          <td>{record.Record}</td>
          <td>{record.Achievement}</td>
        </tr>
      </table>
{/each}
{/await}

