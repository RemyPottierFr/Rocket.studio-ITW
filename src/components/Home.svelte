<script>
  import { goto } from '@sapper/app';
</script>

<svelte:head>
  <title>Welcome !</title>
</svelte:head>

<section class="p-4 h-full w-full">
  <h1 class="text-center text-3xl font-mono font-bold text-orange-600 py-8">
    Welcome on my solutions for the interview of Rocket Studio
  </h1>
  <div class="flex flex-col items-center">
    <h2 class="text-2xl my-4">To discover solutions you can</h2>
    <button
      class="bg-orange-600 transition ease-in duration-300 text-white font-bold py-2 px-4 rounded
      text-xl my-4 hover:bg-orange-500 focus:outline-none"
      on:click="{() => goto('/exercices')}"
    >
      Use this button
    </button>
    <span class="flex items-center text-gray-700 text-2xl w-full text-center justify-center m-8">
      <span class="w-2/12 border-gray-300 border mx-2"></span>
      or
      <span class="w-2/12 border-gray-300 border mx-2"></span>
    </span>
    <span class="flex items-center justify-center text-2xl my-4">
      Use the navbar
      <span class="mx-4 text-orange-500">
        <i class="fas fa-level-up-alt text-3xl"></i>
      </span>
    </span>
  </div>
</section>
