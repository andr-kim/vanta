<script lang="ts">
	import '/src/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import HeaderSecondary from '$lib/components/HeaderSecondary.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<HeaderSecondary />
<main class="pt-30 md:pt-60">
	{@render children?.()}
</main>
