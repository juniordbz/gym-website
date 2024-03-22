<script lang="ts">
  import Intro from '../../components/Intro.svelte'
  import icon from '$lib/assets/icon-weight.png'
  import exercicio from '$lib/assets/exercicios-grupo.jpg'
  import Info from '../../components/Info.svelte'
</script>

<Intro
  title="Conheça a academia que mais cresce na cidade!"
  content="Confira algumas das perguntas frequentes."
  {icon}
  img={exercicio}
/>

<Info />
