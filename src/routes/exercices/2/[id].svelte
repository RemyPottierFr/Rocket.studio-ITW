<script context="module">
  export async function preload({ params }) {
    const id = isNaN(params.id) ? params.id : +params.id;
    return { id };
  }
</script>

<script>
  import { goto } from '@sapper/app';
  import { onMount } from 'svelte';
  import Ex2Question1 from 'components/Ex2Question1.svelte';
  import Ex2Question2 from 'components/Ex2Question2.svelte';

  export let id;
  onMount(() => {
    if (id !== 1 && id !== 2) {
      goto('/');
    }
  });
</script>

{#if id === 1}
  <Ex2Question1 />
{:else if id === 2}
  <Ex2Question2 />
{/if}
