<script>
  import { goto } from '@sapper/app';
  import { dataExerciceBString1, dataExerciceBString2 } from 'static/data';
  import findManathanDistance from 'utils/scripts/manathanDistance';
  let result = 0;
  const findResult = (string1, string2) => {
    result === 0 && (result = findManathanDistance(string1, string2));
    return true;
  };
</script>

<section class="p-4">
  <button
    class="bg-orange-600 transition ease-in duration-300 text-white font-bold py-2 px-4 rounded
    text-xl my-4 hover:bg-orange-500 focus:outline-none"
    on:click="{() => goto('/exercices')}"
  >
    <span class="mx-2">
      <i class="fas fa-chevron-left"></i>
    </span>
    Return to exercices
  </button>

  <div class="flex flex-col">
    <h1 class="text-3xl my-4">Question 1 : Manhattan Distance 📐</h1>
    <span>
      <a
        href="https://github.com/RemyPottierFr/Rocket.studio-ITW#question-1--manhattan-distance-"
        class="text-2xl pl-4"
        title="See ressource"
        target="_blank"
      >
        📎 See ressource
      </a>
    </span>
  </div>

  <div class="flex flex-col my-16">
    <h3 class="text-xl">
      Q1 : Quelle est la distance de Manhattan entre le port central et l'intersection la plus
      proche ?
    </h3>
    <button
      class="bg-orange-600 transition ease-in duration-300 text-white font-bold py-2 px-4 rounded
      text-xl my-4 hover:bg-orange-500 focus:outline-none mt-8"
      on:click="{() => findResult(dataExerciceBString1, dataExerciceBString2)}"
    >
      Find result 🚀
    </button>
    {#if result !== 0}
      <p class="text-4xl text-center py-8 font-bold">{result} 📐</p>
    {/if}
  </div>

</section>
