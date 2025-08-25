<script lang="ts">
	import type { PageData } from './$types';
  export let data: PageData;
  const {service} = data;
</script>

<section class="hero">
	<div class="wrapper flex flex-col gap-y-4">
		<h1>Service ID: {service.id}</h1>
    <p>Service Name: {service.name}</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic atque enim et illum sit
			repellendus veritatis veniam ipsa iure alias. Numquam nemo deserunt, accusamus officiis, odio
			facilis quia tenetur molestias libero incidunt est iure quidem, modi veritatis blanditiis.
			Quasi tempore commodi molestias molestiae, iusto ullam in laborum similique quo vero
			doloribus, ipsam enim labore fuga ut unde officia alias deserunt illum facere error voluptate
			sapiente quam. Numquam deleniti libero molestiae fugiat iure, debitis rem facere ratione
			consequuntur ipsum, impedit dolores assumenda sed atque tenetur? Culpa beatae quibusdam cum
			voluptatum vitae assumenda quos, impedit dolorem provident, blanditiis, ipsa inventore
			perspiciatis repellendus!
		</p>
	</div>
</section>
