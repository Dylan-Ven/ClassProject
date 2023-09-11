<script lang="ts">
  import type { Student } from "../api/students";
  import Dialog from "./Dialog.svelte";
  export let student: Student;

  let dialog: any;
</script>

<button on:click={() => (dialog.showModal())}>
  <p>{student.lastName}, {student.firstName} {#if student.middleName} {student.middleName} {/if}</p>
</button>
<Dialog bind:dialog>
  {#if student.middleName}
    <p>{student.firstName} {student.middleName} {student.lastName}</p>
  {:else}
    <p>{student.firstName} {student.lastName}</p>
  {/if}
  <p>{student.mail}</p>
  <p>{student.schoolId}</p>
  <button on:click={() => dialog.close()}>close</button>
</Dialog>
