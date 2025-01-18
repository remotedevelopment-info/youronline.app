<script>
	const currentYear = new Date().getFullYear();

	const links = {
		product: [
			{ text: 'Features', href: '/#features' },
			{ text: 'Pricing', href: '/pricing' },
			{ text: 'Success Stories', href: '/#testimonials' }
		],
		company: [
			{ text: 'Cadence-CRM', href: 'https://crm.youronline.app' },
			{ text: 'Youronline Website', href: 'https://youronline.uk' },
			{ text: ''}
		],
		support: [
			{ text: 'Articles', href: '/articles' },
			{ text: 'Contact', href: '/contact' },
			{ text: 'Privacy Policy', href: '/privacy' }
		]
	};
</script>

<footer class="mt-24 ">
	<div class="pt-2 border-gray-200 bg-gray-200 mx-auto max-w-7xl dark:bg-gray-700 px-4 sm:px-6 lg:px-8 dark:bg-gray-700">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<div class="col-span-1 mt-2 flex flex-col items-center">
				<img src="/logo.jpeg" alt="Cadence CRM" class="h-48 w-auto" />
				<p class="mt-1 text-base text-sm text-gray-500 dark:text-gray-400">
					<em> Your business, in perfect rhythm </em>
				</p>
			</div>

			{#each Object.entries(links) as [category, items]}
				<div class="mt-8">
					<h3
						class="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-300"
					>
						{category}
					</h3>
					<ul class="mt-4 space-y-2">
						{#each items as { text, href }}
							<li>
								<a
									{href}
									class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
								>
									{text}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
	<div class="mt-1 border-gray-200 bg-gray-200 pt-8 dark:border-gray-700 dark:bg-gray-800">
		<p class="text-center text-base text-gray-400 dark:text-gray-600 text-xs">© {currentYear} Cadence-CRM. All rights reserved.</p>
	</div>
</footer>
