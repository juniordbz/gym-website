<script lang="ts">
  import musculacao from '$lib//assets/musculacao.jpg'
  export let title: string
  export let content: string
  export let btn: string
  export let href: string
  export let icon: string
  export let img: string = musculacao
</script>

<section
  class="imagem imgContainer relative flex min-h-[360px] w-full items-center justify-start bg-cover bg-center pl-10 after:absolute after:inset-0 after:bg-black/50"
  style="background-image: url({img})"
>
  <div class="z-10">
    <h1 class="font-roboto text-4xl">
      {@html title}
      <img class="inline h-9 w-9" src={icon} alt="" />
    </h1>
    <p class="mt-4 max-w-[450px] text-lg">
      {content}
    </p>

    {#if btn && href}
      <a
        class="mt-6 inline-block rounded-md border px-2 py-1 font-roboto delay-150 hover:bg-white hover:text-black hover:delay-100"
        {href}
        >{btn}
      </a>
    {/if}
  </div>
</section>
