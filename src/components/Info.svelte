<script lang="ts">
  import { Plus } from 'lucide-svelte'
  import autoAnimate from '@formkit/auto-animate'

  export let title: string
  export let content: string
  let openDetails = false

  function toggleDetails() {
    openDetails = !openDetails
  }
</script>

<details class="cursor-pointer">
  <summary
    on:click={toggleDetails}
    use:autoAnimate
    class="flex items-center justify-between border border-zinc-500 p-4"
  >
    {title}
    <Plus class="h-4 w-4 flex-shrink-0 {openDetails && 'rotate-45 '}" />
  </summary>
  <p class=" mt-4 border-l-2 border-rose-800 pl-4">
    {content}
  </p>
</details>

<style>
  summary::-webkit-details-marker {
    display: none;
  }
  summary {
    list-style-type: none;
  }
</style>
