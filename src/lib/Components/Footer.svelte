<script>
    const currentYear = new Date().getFullYear();
    
    const links = {
      product: [
        { text: 'Features', href: '/features' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Success Stories', href: '/success-stories' }
      ],
      company: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '/careers' }
      ],
      support: [
        { text: 'Documentation', href: '/docs' },
        { text: 'Contact', href: '/contact' },
        { text: 'Privacy Policy', href: '/privacy' }
      ]
    };
  </script>
  
  <footer class="bg-gray-300 dark:bg-gray-700 mt-24">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1">
          <img src="/logo.jpeg" alt="Cadence CRM" class="h-48 w-auto"/>
          <p class="mt-4 text-base text-gray-500 dark:text-gray-400">
            Your business, in perfect rhythm
          </p>
        </div>
        
        {#each Object.entries(links) as [category, items]}
          <div>
            <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider">
              {category}
            </h3>
            <ul class="mt-4 space-y-4">
              {#each items as { text, href }}
                <li>
                  <a {href} class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    {text}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="text-base text-gray-400 dark:text-gray-500 text-center">
          © {currentYear} Cadence-CRM. All rights reserved.
        </p>
      </div>
    </div>
  </footer>