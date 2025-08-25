<script lang="ts">
  import HeaderSecondary from "$lib/components/HeaderSecondary.svelte";
	let { children } = $props();
</script>

<HeaderSecondary />
<main class="pt-30 md:pt-60">
	{@render children?.()}
</main>