<script>
  import { goto } from '@sapper/app';
  import { dataQuestionA } from 'static/data';

  // Result variable to display when result > 0
  let result = 0;

  /**
   * This function gonna calculate result of fuel need just for mass of rocket
   */
  const findResult = data => {
    // temp variable for comparaison to avoid multiple assignment of result
    let temp = 0;
    //map on data to have temp value of result
    data.map(x => (temp += Math.floor(x / 3) - 2));
    //if result is different of tmp (equal 0) result is updated
    result !== temp && data.map(x => (result += Math.floor(x / 3) - 2));
    return result;
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
    <h1 class="text-3xl my-4">Question 1 : Masse module 🛰️</h1>
    <a
      href="https://github.com/RemyPottierFr/Rocket.studio-ITW#question-1--masse-module-%EF%B8%8F"
      class="text-2xl pl-4"
      title="See ressource"
      target="_blank"
    >
      📎 See ressource
    </a>
  </div>

  <div class="flex flex-col my-16">
    <h3 class="text-xl">
      Q1 : Quelle est la somme des besoins en carburant pour tous les modules de notre fusée ?
    </h3>
    <button
      class="bg-orange-600 transition ease-in duration-300 text-white font-bold py-2 px-4 rounded
      text-xl my-4 hover:bg-orange-500 focus:outline-none mt-8"
      on:click="{() => findResult(dataQuestionA)}"
    >
      Find result 🚀
    </button>
    {#if result !== 0}
      <p class="text-4xl text-center py-8 font-bold">{result} ⛽</p>
    {/if}
  </div>

</section>
