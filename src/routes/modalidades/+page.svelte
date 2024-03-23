<script lang="ts">
  import alongamento from '$lib/assets/alongamento.jpg'
  import icon from '$lib/assets/icon-weight.png'
  import Intro from '../../components/Intro.svelte'
</script>

<Intro
  title="Temos a modalidade certa <br/>
    para você "
  content="Descubra as diversas modalidades da nossa academia."
  {icon}
  btn="Home"
  href="/"
  img={alongamento}
/>
