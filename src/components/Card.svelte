<script lang="ts">
  import type { Student } from "../api/students";
  import Dialog from "./Dialog.svelte";
  export let student: Student;
  import Email from "./Email.svelte";

  let dialog: any;
  let email: any;
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
  <button on:click={() => (email.showModal())} class="noborder">{student.mail}</button>
  <p>{student.schoolId}</p>
  <button on:click={() => dialog.close()}>close</button>
</Dialog>
<Email bind:email>
<form method="POST" action="php/phpmailer.php" class="width">
  <input type="email" placeholder="uw email*" class="iwidth" required name="senderMail">
  <input type="email" class="iwidth five" value="{student.mail}" name="studentMail">
<input type="subject" class="iwidth five" placeholder="subject*" required name="subject">
<input type="text" class="iwidth five" placeholder="cc" name="cc">
<input type="textarea" class="iwidth ten height" placeholder="body*" required name="body">
<input type="submit">
</form><br>
<button on:click={() => email.close()}>close</button>
</Email>


<style>
  input:focus{
    border: 1px solid black;
  }
  .width{
    width: 500px;
  }
  .iwidth{
    width: 85%;
  }
  .five{
    margin-top: 5px;
  }
  .ten{
    margin-top: 10px;
  }
  .height{
    height: 50px;
  }
  input:focus-visible{
    border: 0;
  }
</style>
