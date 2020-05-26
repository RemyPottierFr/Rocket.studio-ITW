<script context="module">
  export async function preload({ params }) {
    const id = isNaN(params.id) ? params.id : +params.id;
    return { id };
  }
</script>

<script>
  import { goto } from '@sapper/app';
  import { onMount } from 'svelte';
  import Ex1Question1 from 'components/Ex1Question1.svelte';
  import Ex1Question2 from 'components/Ex1Question2.svelte';

  export let id;
  onMount(() => {
    console.log(id);
    if (id !== 1 && id !== 2) {
      goto('/');
    }
  });
</script>

{#if id === 1}
  <Ex1Question1 />
{:else if id === 2}
  <Ex1Question2 />
{/if}
