<script lang="ts">
  import icon from '$lib/assets/icon.png'
</script>

<section
  class="relative flex min-h-[360px] w-full items-center justify-start bg-musculacao bg-cover bg-center pl-10 after:absolute after:inset-0 after:bg-black/50"
>
  <div class="z-10">
    <h1 class="text-4xl">
      Você está pronto<br /> para o desafio?
      <img class="inline h-9 w-9" src={icon} alt="" />
    </h1>
    <p class="mt-4 max-w-[450px] text-lg">
      A Academia Local está pronta para te ajudar a chegar mais longe e alcançar
      sua melhor performance.
    </p>

    <button
      type="button"
      class="mt-6 rounded-sm border px-2 font-roboto delay-150 hover:bg-white hover:text-black hover:delay-100"
    >
      Modalidades
    </button>
  </div>
</section>
