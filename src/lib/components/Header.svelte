<script lang="ts">
  import Logo from '$lib/img/logo.svg';
</script>

<header class="fixed">
	<div class="wrapper flex flex-col gap-y-6">
    <a href="/"><img src={Logo} alt="Logotype" class="w-screen" /></a>
		<hr class="border-gray-300" />
		<nav class="flex justify-end gap-x-4">
			<a href="/about" class="navlink">About</a>
			<a href="/projects" class="navlink">Projects</a>
			<a href="/services" class="navlink">Services</a>
			<a href="/blog" class="navlink">Blog</a>
			<a href="/contacts" class="navlink">Contacts</a>
		</nav>
	</div>
</header>
