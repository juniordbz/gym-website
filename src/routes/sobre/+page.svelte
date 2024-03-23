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
  btn="Modalidades"
  href="/modalidades"
/>

<div class="mx-10 mt-14 grid gap-5 md:grid-cols-2">
  <Info
    title="Quanto custa a mensalidade?"
    content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia perspiciatis, cum, tempora debitis doloremque id, placeat reiciendis quas modi ipsa perferendis possimus voluptate velit ullam dolorum magnam! Tenetur, excepturi! "
  />
  <Info
    title="Quantas modalidades estão disponíveis"
    content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia perspiciatis, cum, tempora debitis doloremque id, placeat reiciendis quas modi ipsa perferendis possimus voluptate velit ullam dolorum magnam! Tenetur, excepturi! "
  />
  <Info
    title="Posso utilizar quantos dia da semana?"
    content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum mollitia perspiciatis, cum, tempora debitis doloremque id, placeat reiciendis quas modi ipsa perferendis possimus voluptate velit ullam dolorum magnam! Tenetur, excepturi! "
  />
</div>
