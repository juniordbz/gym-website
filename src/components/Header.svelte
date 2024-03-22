<script lang="ts">
  import logo from '$lib/assets/logo.png'
</script>

<header class="w-full">
  <div class="flex w-full items-center justify-between px-10 py-8">
    <a href="/"
      ><img width="227" height="57" src={logo} alt="Academia Local" /></a
    >
    <nav>
      <ul class="flex items-center gap-6 font-roboto">
        <li class="border-b-2 border-transparent hover:border-white">
          <a href="/">Home</a>
        </li>
        <li class="border-b-2 border-transparent hover:border-white">
          <a href="/sobre">Sobre</a>
        </li>
        <li class="border-b-2 border-transparent hover:border-white">
          <a href="/modaliades">Modalidades</a>
        </li>
        <li
          class="rounded-md border border-rose-800 px-3 py-1 delay-150 hover:border-white hover:bg-white hover:text-black hover:delay-100"
        >
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
