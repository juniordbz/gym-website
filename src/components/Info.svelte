<script lang="ts">
  import { Plus } from 'lucide-svelte'

  export let title: string
  export let content: string
</script>

<details>
  <summary class="flex items-center justify-between border border-zinc-500 p-4">
    {title}
    <Plus />
  </summary>
  <p class="mt-4 border-l-2 border-rose-800 pl-4">{content}</p>
</details>

<style>
  summary::-webkit-details-marker {
    display: none;
  }
  summary {
    list-style-type: none;
  }
</style>
