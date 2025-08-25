<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { post } = data;
</script>

<section>
	<div class="wrapper flex flex-col gap-y-4">
		<span>{post.category}</span>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
	</div>
</section>
