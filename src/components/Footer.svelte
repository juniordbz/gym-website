<script lang="ts">
  import crossfit from '$lib/assets/crossfit.jpg'
</script>

<footer class="flex flex-col px-10">
  <div class="mt-24 flex w-full flex-col items-center gap-5 md:flex-row">
    <img
      class="rounded-xl"
      width="450"
      height="300"
      src={crossfit}
      alt="imagem de modalidade de treino - crosfit"
    />
    <div>
      <h1 class="font-roboto text-4xl">
        Venha fazer seu primeiro treino grátis
      </h1>
      <p class="mt-4 text-lg">
        Entre em contato via WhatsApp ou e-mail e fale com um treinador
        especialista da equipe.
      </p>
      <div class="mt-6 flex gap-2">
        <a
          class="mt-6 inline-block rounded-md border px-2 py-1 font-roboto delay-150 hover:bg-white hover:text-black hover:delay-100"
          href="/">WhatsApp</a
        >
        <a
          class="mt-6 inline-block rounded-md border px-2 py-1 font-roboto delay-150 hover:bg-white hover:text-black hover:delay-100"
          href="/">E-mail</a
        >
      </div>
    </div>
  </div>
  <div class="mt-14 w-full border-t-2 border-zinc-700" />
  <div class="m-6">© Academia Local, 2023</div>
</footer>
