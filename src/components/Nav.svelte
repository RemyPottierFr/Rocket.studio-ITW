<style>
  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }
</style>

<script>
  export let segment;
</script>

<nav class="bg-white border-b-2 border-gray-300 border-solid p-4">
  <ul class="flex justify-center text-xl">
    <li class="mx-2 px-1">
      <a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a>
    </li>
    <li class="mx-2 px-1">
      <a aria-current="{segment === 'exercices' ? 'page' : undefined}" href="exercices">
        Exercices
      </a>
    </li>
  </ul>
</nav>
