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
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sobre">Sobre</a>
        </li>
        <li>
          <a href="/modaliades">Modalidades</a>
        </li>
        <li class="border border-rose-800 px-3 py-1">
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
