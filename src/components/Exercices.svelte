<script>
  import { goto } from '@sapper/app';
</script>

<section class="p-4">
  <h1 class="text-4xl font-mono font-bold text-orange-600 py-8">Exercices</h1>
  <div class="flex flex-col">
    <div class="flex flex-col mb-16">
      <p class="text-2xl py-4 pl-4">🚀 Exercice A : Décolage d'une fusée</p>
      <p class="w-full text-xl px-2">
        Pour décoller, une fusée a besoin d'une quantité de carburant. Vous devez déterminer cette
        quantité de carburant en prenant en compte le poids des différents modules (satellite(s),
        vaisseau spatial, sonde(s), instruments) constituant notre fusée.
      </p>
      <div class="flex flex-col md:flex-row">
        <button
          class="bg-orange-600 transition ease-in duration-300 text-white font-bold py-2 px-4
          rounded text-xl my-4 hover:bg-orange-500 focus:outline-none w-full mx-2 flex items-center
          justify-center"
          on:click="{() => goto('/exercices/1/1')}"
        >
          Question 1 : Masse module 🛰️
          <span class="mx-4 text-2xl">
            <i class="fas fa-chevron-right"></i>
          </span>
        </button>
        <button
          class="bg-orange-600 transition ease-in duration-300 text-white font-bold py-2 px-4
          rounded text-xl my-4 hover:bg-orange-500 focus:outline-none w-full mx-2 flex items-center
          justify-center"
          on:click="{() => goto('/exercices/1/2')}"
        >
          Question 2 : Masse carburant ⛽
          <span class="mx-4 text-2xl">
            <i class="fas fa-chevron-right"></i>
          </span>
        </button>
      </div>
    </div>

    <div class="flex flex-col mb-16">
      <p class="text-2xl py-4 pl-4">🧬 Exercice B : Court-circuit</p>
      <p class="w-full text-xl px-2">
        Zut, votre calcul du carburant est peut-être bon, mais il faut réparer l'assistance
        gravitationnelle !
      </p>
      <div class="flex flex-col md:flex-row">
        <button
          class="bg-orange-600 transition ease-in duration-300 text-white font-bold py-2 px-4
          rounded text-xl my-4 hover:bg-orange-500 focus:outline-none w-full mx-2 flex items-center
          justify-center"
          on:click="{() => goto('/exercices/2/1')}"
        >
          Question 1 : Manhattan Distance 📐
          <span class="mx-4 text-2xl">
            <i class="fas fa-chevron-right"></i>
          </span>
        </button>
        <button
          class="bg-orange-600 transition ease-in duration-300 text-white font-bold py-2 px-4
          rounded text-xl my-4 hover:bg-orange-500 focus:outline-none w-full mx-2 flex items-center
          justify-center"
          on:click="{() => goto('/exercices/2/2')}"
        >
          Question 2 : Timing parfait ⏱️
          <span class="mx-4 text-2xl">
            <i class="fas fa-chevron-right"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
