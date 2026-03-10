<script lang="ts">
  import { fetchStudents, type Student } from "./api/students";
  import Card from "./components/Card.svelte";

  let filteredName = "";
  let asc = true;

  function sortAsc(a: Student, b: Student) {
    if (a.lastName > b.lastName) {
      return 1;
    } else {
      return -1;
    }
  }

  function sortDesc(a: Student, b: Student) {
    if (b.lastName > a.lastName) {
      return 1;
    } else {
      return -1;
    }
  }
</script>

<main>
  <input bind:value={filteredName} type="text" placeholder="search" id="search"/>
  <button on:click={() => (asc = !asc)}> {asc ? "asc" : "desc"} </button>
  {#await fetchStudents()}
    <p>loading</p>
  {:then fetchedStudents}
  <div class="students">
    {#each fetchedStudents
      .filter((student) => student.firstName
            .toLowerCase()
            .includes(filteredName.toLowerCase()) || student.lastName
            .toLowerCase()
            .includes(filteredName.toLowerCase()))
      .sort((a, b) => (asc ? sortAsc(a, b) : sortDesc(a, b))) as student}
      <Card {student} />
    {/each}
  </div>
  {:catch}
    <p>error</p>
  {/await}
</main>

<style>
</style>
