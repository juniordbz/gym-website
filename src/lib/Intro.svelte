<script lang="ts">
  export let title: string
  export let content: string
  export let btn: string
  export let href: string
  export let icon: string
</script>

<section
  class="relative flex min-h-[360px] w-full items-center justify-start bg-musculacao bg-cover bg-center pl-10 after:absolute after:inset-0 after:bg-black/50"
>
  <div class="z-10">
    <h1 class="text-4xl">
      {@html title}
      <img class="inline h-9 w-9" src={icon} alt="" />
    </h1>
    <p class="mt-4 max-w-[450px] text-lg">
      {content}
    </p>

    <a
      class="d mt-6 inline-block rounded-sm border px-2 py-1 font-roboto delay-150 hover:bg-white hover:text-black hover:delay-100"
      {href}
      >{btn}
    </a>
  </div>
</section>
