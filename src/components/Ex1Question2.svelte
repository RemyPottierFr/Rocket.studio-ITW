<script>
  import { goto } from '@sapper/app';
  import { dataQuestionA } from 'static/data';

  let result = 0;

  /**
   * This function gonna calculate result of fuel need just for mass of rocket
   */
  const findResult = data => {
    // Temp variable for final result
    let temp = 0;
    // Map on data array and calculate new fuel with mass of them
    data.map(x => {
      let res = 0;
      res = Math.floor(x / 3) - 2;
      while (res >= 0) {
        temp += res;
        res = Math.floor(res / 3) - 2;
      }
      return;
    });
    // Condition to avoid multiple assignment of result
    result !== temp && (result = temp);
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
    <h1 class="text-3xl my-4">Question 2 : Masse carburant ⛽</h1>
    <a
      href="https://github.com/RemyPottierFr/Rocket.studio-ITW#question-2--masse-carburant-"
      class="text-2xl pl-4 flex items-center"
      title="See ressource"
    >
      📎 See ressource
    </a>
  </div>

  <div class="flex flex-col my-16">
    <h3 class="text-xl">
      Q2 : Quelle est la somme des besoins en carburant de tous les modules de notre fusée en tenant
      compte également de la masse du carburant ajouté ?
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
